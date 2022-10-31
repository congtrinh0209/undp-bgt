import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'vi': {
        thongTinBatBuoc: 'Thông tin bắt buộc',
        themMoi: 'Thêm mới',
        timKiem: 'Tìm kiếm',
        thoat: 'Thoát',
        basic: {
            thongTinBatBuoc: 'Thông tin bắt buộc',
            themMoi: 'Thêm mới',
            timKiem: 'Tìm kiếm',
            thoat: 'Thoát',
            quayLai: 'Quay lại',
            hotline: 'Hotline: 1900 0318 - Điện thoại: (024) 3.822.2979 ',
            xoa: 'Xóa',
            sua: 'Sửa',
            huy: 'Hủy',
            xacnhan: 'Xác nhận',
            stt: 'STT',
            yes: 'Có',
            no: 'Không',
        },
        login: {
            welcomeMsg1: 'HỆ THỐNG GIÁM SÁT VÀ ĐÁNH GIÁ THÍCH ỨNG BIẾN ĐỔI KHÍ HẬU',
            welcomeMsg2: 'BỘ GIAO THÔNG VẬN TẢI',
            loginMsg: 'ĐĂNG NHẬP',
            trungTamCongNgheMsg: 'Trung tâm công nghệ thông tin - Bộ Giao thông vận tải',
            headOffice: 'Trụ sở: Số 80 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',
            tenDangNhap: 'Tên Đănng Nhập',
            batBuocTenDangNhap: 'Tên đăng nhập là bắt buộc',
            matKhau: 'Mật Khẩu',
            batBuocMatKhau: 'Mật khẩu là bắt buộc',
            saiTenDangNhapVaMatKhau: 'Tên đăng nhập hoặc mật khẩu không chính xác'
        },
        drawer: {
            taoBaoCao: 'Tạo Báo Cáo',
            baoCaoChoXuLy: 'Báo Cáo Chờ Xử Lý',
            baoCaoXuLyLai: 'Báo Cáo Xử Lý Lại',
            baoCaoChoDuyet: 'Báo Cáo Chờ Duyệt',
            baoCaoChoPheDuyet: 'Báo Cáo Chờ Phê Duyệt',
            tongHopBaoCao: 'Tổng Hợp Báo Cáo',
            traCuu: 'Tra Cứu Báo Cáo',
            coQuanDonVi: 'Cơ Quan, Đơn Vị',
            canBo: 'Cán Bộ',
            chucVuCanBo: 'Chức Vụ Cán Bộ',
            quanLyDanhMuc: 'Quản Lý Danh Mục',
            dangXuat: 'Đăng Xuất',
        },
        appbar: {
            titlebanner: 'HỆ THỐNG GIÁM SÁT VÀ ĐÁNH GIÁ THÍCH ỨNG BIẾN ĐỔI KHÍ HẬU - BỘ GIAO THÔNG VẬN TẢI',
        },
        formTaoBaoCao: {
            headercontent: 'TẠO BÁO CÁO',
            loaiBaoCao: 'Loại báo cáo',
            donViDuocGiao: 'Đơn vị được giao',
            taoVaGiaoBaoCao: 'Tạo và giao báo cáo',
            chonTatCa: 'Chọn tất cả',
            boTatCa: 'Bỏ tất cả',
            daChon: 'Đã chọn',
            chuaChon: 'Chưa chọn',
            kyBaoCao: 'Kỳ báo cáo',
            namBaoCao: 'Năm báo cáo',
            hanXuLy: 'Hạn xử lý',
            chonNhomBaoCao: 'Chọn nhóm báo cáo',
            chonNhomDonVi: 'Chọn nhóm đơn vị',
        },
        baoCaoTongHop: {
            timKiemNangCao: 'Tìm kiếm nâng cao',
            maBaoCao: 'Mã báo cáo',
            tuNgay: 'Từ Ngày',
            denNgay: 'Đến Ngày',
            timKiem: 'Tìm kiếm',
            stt: 'STT',
            loaiBaoCao: 'Loại báo cáo',
            kyBaoCao: 'Kỳ, năm báo cáo',
            donViDuocGiao: 'Đơn vị được giao',
            ngayTao: 'Ngày tạo',
            hanXuLy: 'Hạn xử lý',
            tinhTrang: 'Tình trạng',
            thaoTac: 'Thao tác',  
            chiTietBaoCao: 'Chi tiết báo cáo', 
            xoaBaoCao: 'Xóa báo cáo',
        },
        pagination: {
            page: 'Trang',
            tongSo: 'Tổng số',
        },
        thongKe: {
            headercontent: 'Tổng hợp báo cáo',
            locSoLieu: 'Lọc số liệu',
            nhomBaoCao: 'Nhóm báo cáo',
            baoCao: 'Báo cáo',
            tongHop: 'Tổng hợp',
            vuiLongChonBaoCao: 'Vui lòng chọn báo cáo muốn thống kê',
            vuiLongChonMau: 'Vui lòng chọn mẫu thống kê',
        },
        coQuanDonVi: {
            headercontent: 'CƠ QUAN, ĐƠN VỊ',
            themMoi: 'Thêm mới',
            themMoiThanhCong: 'Thêm mới thành công',
            themMoiThatBai: 'Thêm mới thất bại',
            nhapTenDonVi: 'Nhập tên đơn vị, mã đơn vị',
            thoat: 'Thoát',
            themCoQuanDonVi: 'Thêm cơ quan, đơn vị',
        },
        danhSachCanBo: {
            headercontent: 'DANH SÁCH CÁN BỘ',
            themMoiCanBo: 'Thêm mới cán bộ',
            nhapTenMaCanBo: 'Nhập tên, mã cán bộ',
            stt: 'STT',

            donViCongTac: 'Đơn vị công tác',
            chucVu: 'Chức vụ',
            maCanBo: 'Mã cán bộ',
            hoVaTen: 'Họ tên',
            sdt: 'Số điện thoại/ email',
            tinhTrangCongTac: 'Tình trạng công tác',
            thaoTac: 'Thao tác',
        },
        danhSachChucVu: {
            headercontent: 'DANH SÁCH CHỨC VỤ',
            nhapTenChucVu: 'Nhập tên chức vụ',
            chonDonVi: 'Chọn đơn vị',
            themChucVu: 'Thêm chức vụ',
        },
        quanLyDanhMuc: {
            headercontent: 'DỮ LIỆU DANH MỤC',
            nhapMaDanhMuc: 'Nhập mã danh mục hoặc tên danh mục',
        },
        chiTietBaoCao: {
            headercontent: 'Chi Tiết Báo Cáo',
            xemLichSuThucHien: 'Xem lịch sử thực hiện',
            themMoiThanhPhan: 'Thêm mới thành phần',
            danhSachThanhPhan: 'Danh sách thành phần',
            themThanhPhanBaoCao: 'Thêm thành phần báo cáo',
            thongTinThanhPhanBaoCao: 'THÔNG TIN THÀNH PHẦN BÁO CÁO',
            capNhatThanhPhanBaoCao: 'CẬP NHẬT THÀNH PHẦN BÁO CÁO',
            themThanhPhan: 'Thêm thành phần',
            chiTietThanhPhan: 'Chi tiết thành phần',
            capNhat: 'Cập nhật',
            xuatExcel: 'Xuất excel',
            ghiChu: 'Ghi chú',
            ghiChuThucHien: 'Ghi chú thực hiện',
            noiDungGhiChu: 'Nội dung ghi chú...',
            thaoTac: 'Thao tác',
            nguoiThucHien: 'Người thực hiện',
            thoiGianThucHien: 'Thời gian thực hiện',
            ghiChuThucHienNote: 'Ghi chú thực hiện',
            lichSuThucHien: 'Lịch sử thực hiện',
            stt: 'STT',
            tenVanBan: 'Tên văn bản',
            loaiVanBan: 'Loại văn bản',
            coQuanBanHanh: 'Cơ quan ban hành',
            ngayBanHanh: 'Ngày ban hành',
            soHieuVanBan: 'Số hiệu văn bản',
            tinhTrang: 'Tình trạng',
            chuaThemFileDinhKem: 'Chưa thêm file đính kèm',
            themMoiThatBai: 'Thêm mới thất bại',
            capNhatThatBai: 'Cập nhật thất bại',
            xoaThanhPhan: 'Xóa thành phần',
            banCoChacChanXoa: 'Bạn có chắc chắn muốn xóa thành phần báo cáo này',
            xoaThanhPhanThatBai: 'Xóa thành phần thất bại',
            xoaThanhPhanThanhCong: 'Xóa thành phần thành công',
            chuaTaoTaiKhoan: 'Chưa tạo tài khoản',
            thucHienThanhCong: 'Thực hiện thành công',
            thucHienThatBai: 'Thực hiện thất bại',
            taiLieu: 'Tài liệu ',
            taiLenKhongThanhCong :' tải lên không thành công. Vui lòng kiểm tra lại.',
            khongTheThemThanhPhan: 'Không thể thêm thành phần. Loại báo cáo chỉ có 1 thành phần',
        },
        formThemThanhPhan: {
            taiLenTaiLieuDinhKem: 'Tải lên tài liệu đính kèm',
            khongCoGiayToDinhKem: 'Không có giấy tờ đính kèm!',
        },
        viTriChucDanh: {
            stt: 'STT',
            chucVu: 'Chức vụ',
            donVi: 'Đơn vị',
            vaiTroSuDung: 'Vai trò sử dụng',
            thaoTac: 'Thao tác',
            thuocDonVi: 'Thuộc đơn vị',
        },
        
    },
    'en': {
        thongTinBatBuoc: 'Information required',
        themMoi: 'Add new',
        timKiem: 'Search',
        thoat: 'Cancel',
        basic: {
            thongTinBatBuoc: 'Information required',
            themMoi: 'Add new',
            timKiem: 'Search',
            thoat: 'Cancel',
            quayLai: 'Back',
            hotline: 'Hotline: 1900 0318 - Phone: (024) 3.822.2979 ',
            xoa: 'Delete',
            sua: 'Edit',
            huy: 'Cancel',
            xacnhan: 'Accept',
            stt: 'S/N',
            yes: 'Yes',
            no: 'No',
            
        },
        login: {
            welcomeMsg1: 'Monitoring and evaluation system for climate change adaptation activities',
            welcomeMsg2: 'Ministry of Transport',
            loginMsg: 'SIGN IN',
            trungTamCongNgheMsg: 'Information Technology Center - Ministry of Transport',
            headOffice: 'Head office: No. 80 Tran Hung Dao, Hoan Kiem, Hanoi',
            tenDangNhap: 'Username',
            batBuocTenDangNhap: 'Incorrect username',
            matKhau: 'Password',
            batBuocMatKhau: 'Incorrect password',
            saiTenDangNhapVaMatKhau: 'Incorrect username or password.',
        },
        drawer: {
            taoBaoCao: 'Create Report',
            baoCaoChoXuLy: 'Waiting Report',
            baoCaoXuLyLai: 'Report Reprocessing',
            baoCaoChoDuyet: 'Report Waiting Unit-Level Approval',
            baoCaoChoPheDuyet: 'Report Waiting Approval',
            tongHopBaoCao: 'Synthesis Report',
            traCuu: 'Search Report',
            coQuanDonVi: 'Agencies, Units',
            canBo: 'Cadre',
            chucVuCanBo: 'Cadre Position',
            quanLyDanhMuc: 'Catalog Management',
            dangXuat: 'Log Out',
        },
        appbar: {
            titlebanner: 'Monitoring and evaluation system for climate change adaptation activities - Ministry of Transport',
        },
        formTaoBaoCao: {
            headercontent: 'CREATING REPORT',
            loaiBaoCao: 'Type of report',
            donViDuocGiao: 'Sub-agency in charge',
            taoVaGiaoBaoCao: 'Create and deliver report',
            chonTatCa: 'select all',
            boTatCa: 'deselect all',
            daChon: 'Selected',
            chuaChon: 'Unselected',
            kyBaoCao: 'Reporting period',
            namBaoCao: 'Report year',
            hanXuLy: 'Processing deadline',
            chonNhomBaoCao: 'Select report group',
            chonNhomDonVi: 'Select unit group',
        },
        baoCaoTongHop: {
            timKiemNangCao: 'Advanced search',
            maBaoCao: 'Report code',
            tuNgay: 'From date',
            denNgay: 'To date',
            timKiem: 'Search',
            stt: 'S/N',
            kyBaoCao: 'Report periad',
            loaiBaoCao: 'Type of report',
            donViDuocGiao: 'Sub-agency in charge',
            ngayTao: 'Date Created',
            hanXuLy: 'Processing deadline',
            tinhTrang: 'Status',
            thaoTac: 'Action', 
            chiTietBaoCao: 'Report Details', 
            xoaBaoCao: 'Delete report'
        },
        pagination: {
            page: 'Page',
            tongSo: 'Total',
        },
        thongKe: {
            headercontent: 'synthesis report',
            locSoLieu: 'filter data',
            nhomBaoCao: 'Report group',
            baoCao: 'Report',
            tongHop: 'Synthetic',
            vuiLongChonBaoCao: 'Please select the report you want to filter',
            vuiLongChonMau: 'Please select a statistical sample',
        },
        coQuanDonVi: {
            headercontent: 'AGENCIES, UNITS',
            themMoi: 'Add new',
            themMoiThanhCong: 'Agencies, Units have been added successfully',
            themMoiThatBai: 'Failed to add',
            nhapTenDonVi: 'Enter the unit name, unit code',
            thoat: 'Cancel',
            themCoQuanDonVi: 'Add new agencie, unit',
        },
        danhSachCanBo: {
            headercontent: 'CADRES LIST',
            themMoiCanBo: 'Add new cadres',
            nhapTenMaCanBo: 'Enter cadre name and cadre code ',
            stt: 'S/N',
            donViCongTac: 'Work unit',
            chucVu: 'Job position',
            maCanBo: 'Cadre code',
            hoVaTen: 'Fullname',
            sdt: 'Phone number/ email',
            tinhTrangCongTac: 'Working Status',
            thaoTac: 'Action',
        },
        danhSachChucVu: {
            headercontent: 'JOB POSITION LIST',
            nhapTenChucVu: 'Enter job position',
            chonDonVi: 'Select unit',
            themChucVu: 'Add job position',
        },
        quanLyDanhMuc: {
            headercontent: 'CATEGORY DATA',
            nhapMaDanhMuc: 'Enter the category code or category name',
        },
        chiTietBaoCao: {
            headercontent: 'Report Detail',
            xemLichSuThucHien: 'View execution history',
            themMoiThanhPhan: 'Add new component',
            danhSachThanhPhan: 'Component list',
            themThanhPhanBaoCao: 'Add report component',
            thongTinThanhPhanBaoCao: 'REPORT COMPONENT INFORMATION',
            capNhatThanhPhanBaoCao: 'UPDATE REPORT COMPONENT',
            themThanhPhan: 'Add component',
            chiTietThanhPhan: 'Component details',
            capNhat: 'Update',
            xuatExcel: 'Export excel',
            ghiChu: 'Note',
            ghiChuThucHien: 'Write a Note',
            noiDungGhiChu: 'Note content...',
            thaoTac: 'Action',
            nguoiThucHien: 'Performer',
            thoiGianThucHien: 'Execution time',
            ghiChuThucHienNote: 'Note',
            lichSuThucHien: 'Execution history',
            stt: 'S/N',
            tenVanBan: 'Name of Document',
            loaiVanBan: 'Document type',
            coQuanBanHanh: 'Issuing authority',
            ngayBanHanh: 'Issuance date',
            soHieuVanBan: 'Text number',
            tinhTrang: 'Status',
            chuaThemFileDinhKem: 'No files attached yet',
            themMoiThatBai: 'Adding failed',
            capNhatThatBai: 'Update failed',
            xoaThanhPhan: 'Delete component',
            banCoChacChanXoa: 'Are you sure to remove this report element',
            xoaThanhPhanThatBai: 'Delete component failed',
            xoaThanhPhanThanhCong: 'Delete component successfully',
            chuaTaoTaiKhoan: 'Have not created an account yet',
            thucHienThanhCong: 'Successful',
            thucHienThatBai: 'Failed',
            taiLieu: 'Document ',
            taiLenKhongThanhCong :' upload failed. Please check again.',
            khongTheThemThanhPhan: 'Cannot add component. The report type has only one component',
        },
        formThemThanhPhan: {
            taiLenTaiLieuDinhKem: 'Upload attachments',
            khongCoGiayToDinhKem:'No documents attached!',
        },
        viTriChucDanh: {
            stt: 'S/n',
            chucVu: 'Job position',
            donVi: 'Unit',
            vaiTroSuDung: 'User role',
            thaoTac: 'Action',
            thuocDonVi: 'From Unit',
        },

    },
}

const i18n = new VueI18n({
    locale: 'vi', // set locale
    fallbackLocale: 'vi', // set fallback locale
    messages, // set locale messages
})

export default i18n
