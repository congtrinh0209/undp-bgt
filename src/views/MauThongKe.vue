<template>
    <v-card
      class="mx-auto pa-3"
      style="padding-bottom: 36px !important"
      flat
    >   
        <!-- title: Thống Kê Mẫu Báo Cáo -->
        <v-row justify="end" class="mt-0 mb-0 mx-0" style="border-bottom: 1px solid #2161B1">
            <v-col class="d-flex align-center justify-start py-0 pl-0" style="max-width: 300px;color: #2161B1;font-weight: 500;margin-bottom: -1px;">
                <div class="header-content ">
                    Thống kê mẫu báo cáo
                </div>
                <div class="triangle-header"></div>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        
        <!-- form: searchForm  -->
        <v-form
            ref="formThanhPhan"
            lazy-validation
            class="mt-2"
        >
            <v-layout wrap >
                <div v-for="(item, index) in searchForm" v-bind:key="index" :class="item['fieldClass']" class="py-0 mb-2" >
                  <label>{{item['title']}}</label>    
                    <v-text-field
                        v-if="item.type === 'textfield'"
                        class="flex input-form"
                        v-model="data[item['name']]"
                        :placeholder="item['placeHolder']"
                        solo
                        dense
                        hide-details="auto"
                        :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
                    ></v-text-field>
                    <v-autocomplete
                        v-if="item.type === 'select' && item['api']"
                        class="flex input-form"
                        hide-no-data
                        v-model="data[item['name']]"
                        :items="item.dataSource"
                        :multiple="item['multiple']"
                        :item-text="item.itemText"
                        :item-value="item.itemValue"
                        dense
                        solo
                        hide-details="auto"
                        return-object
                        :rules="item.required ? [v => (v !== '' && v !== null && v !== undefined) || 'Thông tin bắt buộc'] : []"
                    >
                    </v-autocomplete>
                </div>
            </v-layout>

            <v-row class="my-0 pr-3">
              <v-col cols="12" class="d-flex align-center justify-end py-3 pb-0 my-0 pr-3" >
                <v-btn color="primary" depressed small class="mx-0 text-white" @click="">
                  <v-icon size="18">mdi-magnify</v-icon>&nbsp;
                  Tìm kiếm
                </v-btn>
              </v-col>
            </v-row>

        </v-form>
        
        <!-- table: render headers từ listViews -->
        <v-row class="my-0 py-0 pt-3">
            <v-col cols="12"  class="pt-0">
              <v-data-table
                :headers="headers"
                :items="danhSachThanhPhan"
                :items-per-page="itemsPerPage"
                item-key="primKey"
                hide-default-footer
                class="table-base mt-2"
                no-data-text="Không có"
                :loading="loadingData"
                loading-text="Đang tải... "
              >
                <template v-slot:body="{ items, headers}">
                  <tbody>
                    <tr v-for="(item, index) in items" :key="index" @click="showThongTinThanhPhan(item)">
                      <td v-for="(itemHeader, indexHeader) in headers" :key="indexHeader" :class="itemHeader['class']" :width="itemHeader.hasOwnProperty('width') ? itemHeader.width : ''">
                        <div v-if="itemHeader.type == 'index'">
                          <div v-if="itemsPerPage" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                          <div v-else :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">{{ index + 1 }}</div>
                        </div>
                        <div v-else-if="itemHeader.type == 'date'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? dateLocale(item['noiDung'][itemHeader.value]) : '' }}
                        </div>
                        <div v-else-if="itemHeader.type == 'datetime'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? dateLocaleTime(item['noiDung'][itemHeader.value]) : ''}}
                        </div>
                        <div v-else-if="itemHeader.type == 'object'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? item['noiDung'][itemHeader.value][itemHeader.mapping] : '' }}
                        </div>
                        <div v-else-if="itemHeader.type == 'money'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? currency(item['noiDung'][itemHeader.value]) : '' }}
                        </div>
                        <div v-else-if="itemHeader.type == 'array'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'].hasOwnProperty(itemHeader.value) ? convertDataArray(itemHeader, item['noiDung'][itemHeader.value]) : '' }}
                        </div>
                        <div v-else-if="itemHeader.type == 'calculator'" :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ convertDataView(itemHeader, item['noiDung']) }}
                        </div>
                        <div v-else-if="itemHeader.type == 'action'">
                          <v-tooltip top >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn @click.stop="showThongTinThanhPhan(item)" color="#2161b1" text icon class=" mr-2" v-bind="attrs" v-on="on">
                                <v-icon size="18">mdi-file-document-multiple-outline</v-icon>
                              </v-btn>
                            </template>
                            <span>Chi tiết thành phần</span>
                          </v-tooltip>
                          <v-tooltip top v-if="isAdmin || checkRole('CAPNHATBAOCAO')">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn @click.stop="showUpdateThanhPhan(item)" color="#2161b1" text icon class=" mr-2" v-bind="attrs" v-on="on">
                                <v-icon size="18">mdi-pencil</v-icon>
                              </v-btn>
                            </template>
                            <span>Sửa</span>
                          </v-tooltip>
                          <v-tooltip top v-if="isAdmin || checkRole('CAPNHATBAOCAO')">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn @click.stop="xoaThanhPhan(item)" color="red" text icon class="" v-bind="attrs" v-on="on">
                                <v-icon size="18">mdi-delete</v-icon>
                              </v-btn>
                            </template>
                            <span>Xóa</span>
                          </v-tooltip>
                        </div>
                        <div v-else :style="itemHeader.hasOwnProperty('style') ? itemHeader.style : ''">
                          {{ item['noiDung'][itemHeader.value] }}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
              <pagination v-if="pageCount" :pageInput="page" :total="total" :pageCount="pageCount" @tiny:change-page="changePage"></pagination>
            </v-col>
        </v-row>

        <!--diaglog: popup lọc mẫu theo Loại & Mẫu -->
        <v-dialog
            max-width="900"
            v-model="dialogChonMauBaoCao"
            persistent
            >
            <v-card>
                <v-toolbar
                dark
                color="primary" class="px-3"
                >
                    <v-toolbar-title>Chọn mẫu Báo Cáo</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                        small
                        icon
                        dark
                        @click="dialogChonMauBaoCao = false"
                        >
                        <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                
                <v-card-text class="mt-5 px-2">
                    <v-form
                        ref="formAddToChuc"
                        lazy-validation
                    >
                        <v-layout wrap>
                            <v-col cols="12" md="12" class="py-0 mb-2">
                                <label>Loại báo cáo</label>
                                <v-autocomplete
                                    class="flex input-form mt-2"
                                    hide-no-data
                                    label="Chọn loại báo cáo"
                                    :items="danhSachNhomBaoCao"
                                    v-model="nhomBaoCao"
                                    item-text="tenMuc"
                                    item-value="maMuc"
                                    dense
                                    solo
                                    hide-details="auto"
                                    clearable
                                    return-object
                                    @change="getDanhSachMauBaoCao"

                                >
                                </v-autocomplete>
                            </v-col>
                            <v-col cols="12" md="12" class="py-0 mb-2">
                                <label>Mẫu báo cáo</label>
                                <v-autocomplete
                                class="flex input-form mt-2"
                                hide-no-data
                                label="Chọn mẫu báo cáo"
                                :items="danhSachMauBaoCao"
                                v-model="mauBaoCao"
                                item-text="tenGoi"
                                item-value="maMauBaoCao"
                                dense
                                solo
                                hide-details="auto"
                                clearable
                                return-object
                                >
                                </v-autocomplete>
                            </v-col>
                        </v-layout>
                    </v-form>
                </v-card-text>
                
                <v-card-actions class="justify-end pb-3">                    
                    <v-btn small class="mr-2" color="primary" @click="getDuLieuMauThongKe()">
                        <v-icon left>
                            mdi-image-filter-center-focus-weak
                        </v-icon>
                        <span>Lọc mẫu</span>
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-dialog>

    </v-card>
</template>

<script>
import Pagination from './Pagination.vue'

export default {
    name: 'BaoCao',
    components: {
      Pagination,
    },
    props: ['id'],
    data() {
        return {
            dialogChonMauBaoCao: true,
            danhSachNhomBaoCao: [],
            nhomBaoCao: '',
            danhSachMauBaoCao: [],
            mauBaoCao: '',
            danhSachBaoCao: [],
            searchForm: [],
            validFormAdd: false,
            data: {},
            page: 0,
            itemsPerPage: 0,
            total: 0,
            pageCount: 0,
            loadingData: false,
            danhSachThanhPhan: [],
            headers: [],
        }
    },
    created () {
        let vm = this
        if (!vm.isAdmin && !vm.checkRole('XEMBAOCAODONVI') && !vm.checkRole('XEMTATCABAOCAO')) {
          vm.$router.push({ path: '/login'})
          return
        }
        vm.loadDuLieuMauThongKe()
        vm.getDanhMuc('NHOMBAOCAO')  
        vm.getDanhSachMauBaoCao()    
    },
    watch: {
        '$route': function (newRoute, oldRoute) {
          let vm = this
          vm.loadDuLieuMauThongKe()
        }
    },
    methods: {
      getDanhMuc (collection) {
      let vm = this
      let filter = {
        collectionName: 'dulieudanhmuc',
        data: {
          orderFields: 'maMuc',
          orderTypes: 'asc',
          page: 0,
          size: 1000,
          danhMuc_maDanhMuc: collection
        }
      }
      vm.$store.dispatch('collectionFilter', filter).then(function (response) {
        if (collection === 'NHOMBAOCAO') {
          vm.danhSachNhomBaoCao = response.content
        }
      }).catch(function () {
      })
      },
      getDanhSachMauBaoCao () {
          let vm = this
          let filter = {
          collectionName: 'maubaocao',
          data: {
              orderFields: 'tenGoi',
              orderTypes: 'asc',
              nhomBaoCao_maMuc: vm.nhomBaoCao ? vm.nhomBaoCao.maMuc : '',
              page: 0,
              size: 1000,
          }
          }
          vm.$store.dispatch('collectionFilter', filter).then(function (response) {
              vm.danhSachMauBaoCao = response.content
          }).catch(function () {
          })
      },
      loadDuLieuMauThongKe() {
        let vm = this
        if (vm.id) {
          vm.dialogChonMauBaoCao = false
          vm.getDuLieuMauThongKeTheoKey(vm.id)
          setTimeout(function () {
            vm.initForm()
          }, 200)
        }
      },
      getDuLieuMauThongKe () {
          let vm = this
          vm.getDuLieuMauThongKeTheoKey(vm.mauBaoCao.maDinhDanh)
          setTimeout(function () {
            vm.initForm()
          }, 200)
          vm.$router.push({ path: '/thong-ke-mau-bao-cao/' + vm.mauBaoCao.maDinhDanh})
          vm.dialogChonMauBaoCao = false
      },
      getDuLieuMauThongKeTheoKey (key) {
          let vm = this
          let filter = {
            collectionName: 'maubaocao',
            keySearch: 'madinhdanh',
            id: key,
          }
          vm.$store.dispatch('collectionDetailSearch', filter).then(function (response) {
            vm.thongKeMauBaoCao = response.resp
            vm.headers = vm.thongKeMauBaoCao.mauThongKe[0].listView[0]['headers']
            vm.searchForm = vm.thongKeMauBaoCao.mauThongKe[0]['searchForm']
            vm.itemsPerPage = vm.chiTietMauBaoCao.mauHienThi[0].hasOwnProperty('itemsPerPage') ? vm.chiTietMauBaoCao.mauHienThi[0].itemsPerPage : 0
            vm.getdanhSachThanhPhan()
          }).catch(function () {
          })
      },
      initForm (key) {
        let vm = this
        for (let key in vm.searchForm) {
          let itemData = vm.searchForm[key]
          if (itemData['type'] === 'select' && itemData.hasOwnProperty('api') && itemData['api']) {
            vm.$store.dispatch('loadDataSource', itemData).then(function(result) {
              let resultData = itemData['responseDataApi'] ? result[itemData['responseDataApi']] : result
              vm.$set(vm.searchForm[key], 'dataSource', resultData)
            }).catch(function(){})
          }

        }
      },
    }
}

</script>

<style lang="scss">
  .bao-cao-1 {
    width: 300px;
    max-width: 235px;
    /* border-bottom: 1px solid #DDDDDD; */
  }
  .bao-cao-1 .v-list {
    padding-top: 0px;
  }
  .nav-content {
    border-right: 1px solid #DDDDDD;
    box-sizing: border-box;
    // border-radius: 7px;
    height: 100%;
  }
</style>
