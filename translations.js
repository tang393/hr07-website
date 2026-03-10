// HR07 Beauty Clinic - Multi-language Translation File
// Languages: Vietnamese (primary), Traditional Chinese, Japanese, Korean

const TRANSLATIONS = {

  // ============================================================
  // VIETNAMESE (Primary Language)
  // ============================================================
  vi: {
    // Navigation
    nav_about: 'Giới thiệu',
    nav_services: 'Dịch vụ',
    nav_space: 'Không gian',
    nav_ai_skin: 'AI Skin',
    nav_contact: 'Liên hệ',
    nav_doctor: 'Bác sĩ',
    nav_skin_test: 'Phân tích da',

    // Hero Section
    hero_subtitle: 'Beauty Clinic',
    hero_tagline: 'Nơi vẻ đẹp được nâng tầm',
    hero_cta: 'Khám phá dịch vụ',

    // About Section
    about_label: 'Về chúng tôi',
    about_title: 'Hội tụ chuyên môn — Tôn vinh vẻ đẹp',
    about_desc: 'HR07 Beauty Clinic kết hợp chuyên môn y khoa hàng đầu từ Đài Loan với sự hiểu biết sâu sắc về làn da châu Á, mang đến trải nghiệm làm đẹp đẳng cấp tại Quận 3.',
    about_feature1_title: 'Chuyên gia Đài Loan',
    about_feature1_desc: 'Bác sĩ ngoại khoa với hơn 15 năm kinh nghiệm thẩm mỹ, mang đến kỹ thuật tiên tiến và chuẩn mực an toàn quốc tế.',
    about_feature2_title: 'Bác sĩ Việt Nam',
    about_feature2_desc: 'Đội ngũ bác sĩ da liễu được cấp phép tại Việt Nam, am hiểu đặc điểm làn da và nhu cầu của khách hàng châu Á.',
    about_feature3_title: 'Vị trí đắc địa',
    about_feature3_desc: 'Tọa lạc tại Quận 3 — trung tâm TP.HCM, không gian thiết kế cao cấp đạt tiêu chuẩn quốc tế, riêng tư và tinh tế.',

    // Services Section
    services_label: 'Dịch vụ',
    services_title: 'Giải pháp làm đẹp toàn diện',
    services_desc: 'Mỗi liệu trình được thiết kế riêng biệt, kết hợp công nghệ hiện đại và kỹ thuật chuyên sâu để mang đến kết quả tự nhiên nhất.',

    service1_name: 'Tiêm Botox',
    service1_desc: 'Xóa nếp nhăn, thon gọn hàm, giảm tiết mồ hôi hiệu quả',
    service1_price: 'Từ 3.000.000 VND',

    service2_name: 'Tiêm Filler',
    service2_desc: 'Nâng mũi, làm đầy rãnh cười, tạo hình môi tự nhiên',
    service2_price: 'Từ 5.000.000 VND',

    service3_name: 'Chỉ Collagen',
    service3_desc: 'Nâng cơ, căng da không phẫu thuật, trẻ hóa toàn diện',
    service3_price: 'Từ 8.000.000 VND',

    service4_name: 'Laser Trị Nám',
    service4_desc: 'Công nghệ Pico laser xóa nám, tàn nhang, đốm nâu',
    service4_price: 'Từ 3.000.000 VND',

    service5_name: 'Skinbooster',
    service5_desc: 'Cấp ẩm sâu, cải thiện kết cấu da từ bên trong',
    service5_price: 'Từ 4.000.000 VND',

    service6_name: 'Peel Da Sinh Học',
    service6_desc: 'Tái tạo bề mặt da, thu nhỏ lỗ chân lông, sáng da',
    service6_price: 'Từ 2.000.000 VND',

    service7_name: 'Mesotherapy',
    service7_desc: 'Vi điểm dưỡng chất, trẻ hóa & phục hồi da toàn diện',
    service7_price: 'Từ 3.000.000 VND',

    service8_name: 'Trị Mụn Chuyên Sâu',
    service8_desc: 'Kết hợp laser, thuốc & liệu trình cá nhân hóa',
    service8_price: 'Từ 2.000.000 VND',

    // Doctor Section
    doctor_label: 'Bác sĩ',
    doctor_title: 'Bác sĩ Đài Loan trực tiếp thực hiện',
    doctor_desc: 'Tại HR07, mọi liệu trình đều được bác sĩ chuyên khoa từ Đài Loan trực tiếp tư vấn và thực hiện — đảm bảo kỹ thuật chính xác và kết quả an toàn nhất.',
    doctor_badge: 'Bác sĩ Đài Loan',
    doctor_name: 'Bác sĩ Trịnh Chí Hoành',
    doctor_bio: 'Bác sĩ ngoại khoa chuyên khoa từ Đài Loan với hơn 15 năm kinh nghiệm trong lĩnh vực thẩm mỹ y khoa. Từng làm việc tại các bệnh viện và trung tâm thẩm mỹ hàng đầu Đài Loan trước khi đến Việt Nam, mang theo kỹ thuật tiên tiến và triết lý làm đẹp tự nhiên.',
    doctor_spec1: 'Vi chỉnh hình tiêm (Botox, Filler)',
    doctor_spec2: 'Laser quang trị liệu',
    doctor_spec3: 'Y học chống lão hóa',
    doctor_spec4: 'Hơn 15 năm kinh nghiệm lâm sàng',

    // Space Section
    space_label: 'Không gian',
    space_title: 'Không gian HR07',
    space_desc: 'Mỗi đường nét, mỗi ánh sáng đều được chăm chút để tạo nên không gian thư giãn tuyệt đối — nơi bạn tìm thấy sự bình yên giữa lòng thành phố.',
    space_design_title: 'Thiết kế lấy cảm hứng từ thiên nhiên',
    space_design_desc1: 'Lấy cảm hứng từ những đường cong hữu cơ của sóng biển và cánh hoa, HR07 mang đến không gian thẩm mỹ khác biệt hoàn toàn — không lạnh lẽo như phòng khám, mà ấm áp như một spa resort đẳng cấp.',
    space_design_desc2: 'Mỗi phòng trị liệu được phân cách bằng kính cách âm, đảm bảo sự riêng tư tuyệt đối cho khách hàng.',
    space_feature_1: 'Tường sóng điêu khắc 3D',
    space_feature_2: 'Đèn LED vàng ấm',
    space_feature_3: 'Tranh hoa nghệ thuật',
    space_feature_4: 'Nội thất da cao cấp',
    space_feature_5: 'Sàn marble tự nhiên',
    space_feature_6: 'Cây xanh trang trí',

    // AI Skin Analysis Section
    ai_label: 'Công nghệ AI',
    ai_title: 'Phân tích da miễn phí bằng AI',
    ai_desc: 'Sử dụng trí tuệ nhân tạo tiên tiến để phân tích tình trạng da và đề xuất liệu trình phù hợp nhất cho bạn.',
    ai_step1_title: 'Chụp ảnh da',
    ai_step1_desc: 'Chụp ảnh selfie trong ánh sáng tự nhiên, không trang điểm để AI phân tích chính xác nhất.',
    ai_step2_title: 'AI phân tích',
    ai_step2_desc: 'Hệ thống AI đánh giá 8 chỉ số da: độ ẩm, nám, mụn, nếp nhăn, lỗ chân lông và nhiều hơn nữa.',
    ai_step3_title: 'Nhận kết quả',
    ai_step3_desc: 'Báo cáo chi tiết và đề xuất liệu trình cá nhân hóa từ chuyên gia HR07.',
    ai_cta: 'Phân tích da ngay',

    // Contact Section
    contact_label: 'Liên hệ',
    contact_title: 'Đặt lịch hẹn',
    contact_desc: 'Liên hệ ngay để được tư vấn miễn phí và trải nghiệm dịch vụ làm đẹp đẳng cấp tại HR07.',
    contact_address_title: 'Địa chỉ',
    contact_address: '10 [Đang cập nhật]\nQuận 3, TP. Hồ Chí Minh',
    contact_hours_title: 'Giờ làm việc',
    contact_hours: 'Thứ 2 — Thứ 7: 9:00 — 19:00\nChủ nhật: 9:00 — 17:00',
    contact_zalo_title: 'Liên hệ Zalo',
    contact_zalo_text: 'Chat trực tiếp qua Zalo',
    contact_zalo_link: 'Nhắn tin ngay',

    // Before/After Section
    ba_label: 'Kết quả',
    ba_title: 'Hình ảnh trước & sau',
    ba_desc: 'Những ca điều trị thực tế tại HR07 — minh chứng rõ ràng cho kỹ thuật chuyên nghiệp và kết quả tự nhiên.',
    ba_case1_title: 'Tiêm Botox — Thon gọn hàm',
    ba_case1_desc: 'Kết quả sau 2 tuần điều trị',
    ba_case2_title: 'Laser Trị Nám — Pico Laser',
    ba_case2_desc: 'Kết quả sau 3 lần điều trị',
    ba_case3_title: 'Filler — Nâng mũi tự nhiên',
    ba_case3_desc: 'Kết quả ngay sau điều trị',

    // Trust Signals Section
    trust_label: 'Cam kết chất lượng',
    trust_title: 'Tiêu chuẩn quốc tế — Chất lượng đảm bảo',
    trust_desc: 'HR07 sử dụng thiết bị và sản phẩm chính hãng từ các thương hiệu hàng đầu thế giới, đảm bảo an toàn và hiệu quả tối đa.',
    trust_equipment_title: 'Thiết bị & Công nghệ',
    trust_products_title: 'Sản phẩm chính hãng',
    trust_certs_title: 'Chứng nhận & Tiêu chuẩn',
    trust_cert1: 'Giấy phép hành nghề Bộ Y tế VN',
    trust_cert2: 'Bác sĩ chứng nhận quốc tế',
    trust_cert3: 'Sản phẩm FDA / CE approved',
    trust_stat1_num: '15+',
    trust_stat1_label: 'Năm kinh nghiệm',
    trust_stat2_num: '5,000+',
    trust_stat2_label: 'Ca điều trị thành công',
    trust_stat3_num: '100%',
    trust_stat3_label: 'Sản phẩm chính hãng',
    trust_stat4_num: '4.9',
    trust_stat4_label: 'Đánh giá trung bình',

    // Testimonials Section
    testimonials_label: 'Đánh giá',
    testimonials_title: 'Khách hàng nói gì về HR07',
    testimonials_desc: 'Sự hài lòng của khách hàng là thước đo chất lượng dịch vụ của chúng tôi.',
    testimonial1_text: '"Lần đầu tiên tôi tiêm Botox và rất lo lắng, nhưng bác sĩ tư vấn rất kỹ và thực hiện nhẹ nhàng. Kết quả tự nhiên, không ai biết tôi đã làm thẩm mỹ."',
    testimonial1_name: 'Thanh Trúc',
    testimonial1_service: 'Tiêm Botox — Thon gọn hàm',
    testimonial2_text: '"Không gian phòng khám rất đẹp và sang trọng. Nhân viên nhiệt tình, bác sĩ Đài Loan rất chuyên nghiệp. Tôi đã giới thiệu cho nhiều bạn bè."',
    testimonial2_name: 'Minh Anh',
    testimonial2_service: 'Skinbooster — Cấp ẩm sâu',
    testimonial3_text: '"Tôi bị nám nhiều năm, đã thử nhiều nơi nhưng không hiệu quả. Sau 3 lần laser tại HR07, da sáng hẳn lên. Cảm ơn bác sĩ rất nhiều!"',
    testimonial3_name: 'Hồng Nhung',
    testimonial3_service: 'Laser Trị Nám — Pico Laser',

    // FAQ Section
    faq_label: 'Câu hỏi thường gặp',
    faq_title: 'Giải đáp thắc mắc',
    faq_desc: 'Những câu hỏi phổ biến nhất về dịch vụ và quy trình tại HR07.',
    faq_q1: 'Tiêm Botox có đau không? Mất bao lâu?',
    faq_a1: 'Tiêm Botox gần như không đau, chỉ có cảm giác châm nhẹ. Toàn bộ quá trình chỉ mất 15-20 phút. Bạn có thể trở lại sinh hoạt bình thường ngay sau đó. Kết quả thấy rõ sau 3-7 ngày và duy trì 4-6 tháng.',
    faq_q2: 'Tiêm filler có an toàn không? Có bị biến chứng không?',
    faq_a2: 'HR07 chỉ sử dụng filler chính hãng Allergan và Galderma, được FDA chứng nhận. Bác sĩ có hơn 15 năm kinh nghiệm thực hiện hàng nghìn ca tiêm filler. Biến chứng rất hiếm khi có bác sĩ giỏi và sản phẩm chính hãng.',
    faq_q3: 'Bác sĩ Đài Loan có mặt thường xuyên không?',
    faq_a3: 'Bác sĩ Trịnh Chí Hoành làm việc tại HR07 hầu hết các ngày trong tuần. Ngoài ra, chúng tôi còn có đội ngũ bác sĩ da liễu Việt Nam được cấp phép, đảm bảo luôn có chuyên gia tư vấn cho bạn.',
    faq_q4: 'HR07 có hỗ trợ ngôn ngữ nào?',
    faq_a4: 'Chúng tôi hỗ trợ tư vấn bằng tiếng Việt, tiếng Trung (Mandarin), tiếng Anh và tiếng Hàn. Bác sĩ Đài Loan giao tiếp trực tiếp bằng tiếng Trung và tiếng Anh.',
    faq_q5: 'Quy trình đặt lịch hẹn như thế nào?',
    faq_a5: 'Bạn có thể đặt lịch qua Zalo, WhatsApp hoặc gọi điện trực tiếp. Nhân viên sẽ tư vấn sơ bộ và sắp xếp lịch phù hợp. Đến phòng khám, bác sĩ sẽ thăm khám và tư vấn chi tiết trước khi bắt đầu điều trị.',

    // Footer
    footer_copyright: '\u00A9 2024 HR07 Beauty Clinic. All rights reserved.',
    footer_address: 'Quận 3, TP. Hồ Chí Minh, Việt Nam',
  },

  // ============================================================
  // TRADITIONAL CHINESE (繁體中文)
  // ============================================================
  zh: {
    // Navigation
    nav_about: '關於我們',
    nav_services: '療程服務',
    nav_space: '空間',
    nav_ai_skin: 'AI 測膚',
    nav_contact: '聯繫我們',
    nav_doctor: '醫師',
    nav_skin_test: 'AI 測膚',

    // Hero Section
    hero_subtitle: 'Beauty Clinic',
    hero_tagline: '美麗，從此不同',
    hero_cta: '探索療程服務',

    // About Section
    about_label: '關於我們',
    about_title: '匯聚專業 — 綻放美麗',
    about_desc: 'HR07 Beauty Clinic 結合台灣頂尖醫美專業與對亞洲肌膚的深入了解，在三郡為您帶來頂級美容體驗。',
    about_feature1_title: '台灣專家',
    about_feature1_desc: '擁有15年以上醫美經驗的外科醫師，帶來先進技術與國際安全標準。',
    about_feature2_title: '越南醫師',
    about_feature2_desc: '持有越南執照的皮膚科醫師團隊，深諳亞洲肌膚特點與客戶需求。',
    about_feature3_title: '黃金地段',
    about_feature3_desc: '坐落於三郡核心地段，國際級高端設計空間，私密而精緻。',

    // Services Section
    services_label: '療程服務',
    services_title: '全方位美容方案',
    services_desc: '每項療程均量身定制，融合現代科技與專業技術，呈現最自然的效果。',

    service1_name: '肉毒桿菌注射',
    service1_desc: '消除皺紋、瘦臉、抑制多汗，效果顯著',
    service1_price: '從 3,000,000 VND 起',

    service2_name: '玻尿酸填充',
    service2_desc: '隆鼻、填充法令紋、豐唇塑形，自然美麗',
    service2_price: '從 5,000,000 VND 起',

    service3_name: '膠原蛋白埋線',
    service3_desc: '非手術拉提緊緻、全面回春抗老',
    service3_price: '從 8,000,000 VND 起',

    service4_name: '雷射除斑',
    service4_desc: 'Pico皮秒雷射去除色斑、雀斑、褐斑',
    service4_price: '從 3,000,000 VND 起',

    service5_name: '水光針',
    service5_desc: '深層補水保濕、改善膚質與膚況',
    service5_price: '從 4,000,000 VND 起',

    service6_name: '生物煥膚',
    service6_desc: '肌膚表面重建、縮小毛孔、提亮膚色',
    service6_price: '從 2,000,000 VND 起',

    service7_name: '中胚層療法',
    service7_desc: '微點導入營養精華、回春修復肌膚',
    service7_price: '從 3,000,000 VND 起',

    service8_name: '深層祛痘療程',
    service8_desc: '結合雷射、藥物與個人化治療方案',
    service8_price: '從 2,000,000 VND 起',

    // Doctor Section
    doctor_label: '醫師',
    doctor_title: '台灣醫師親自操刀',
    doctor_desc: '在 HR07，所有療程均由台灣專科醫師親自諮詢與執行——確保最精準的技術與最安全的成果。',
    doctor_badge: '台灣醫師',
    doctor_name: '鄭志紘 醫師',
    doctor_bio: '來自台灣的外科專科醫師，擁有超過 15 年醫美臨床經驗。曾任職於台灣頂尖醫院與醫美中心，帶來先進技術與自然美學理念。',
    doctor_spec1: '微整形注射（肉毒桿菌、玻尿酸）',
    doctor_spec2: '雷射光療',
    doctor_spec3: '抗衰老醫學',
    doctor_spec4: '超過 15 年臨床經驗',

    // Space Section
    space_label: '空間',
    space_title: 'HR07 空間',
    space_desc: '每一處線條、每一束光線都經過精心雕琢，打造絕對放鬆的空間——在城市中心找到寧靜。',
    space_design_title: '源自自然的設計靈感',
    space_design_desc1: '汲取海浪與花瓣的有機曲線靈感，HR07 打造截然不同的醫美空間——不是冰冷的診所，而是溫暖如頂級 SPA 度假村。',
    space_design_desc2: '每間治療室以隔音玻璃分隔，確保客戶絕對隱私。',
    space_feature_1: '3D 波浪雕塑牆',
    space_feature_2: '暖金色 LED 燈光',
    space_feature_3: '花卉藝術裝飾',
    space_feature_4: '高級皮革家具',
    space_feature_5: '天然大理石地板',
    space_feature_6: '綠植點綴',

    // AI Skin Analysis Section
    ai_label: 'AI 科技',
    ai_title: 'AI 免費肌膚分析',
    ai_desc: '運用先進人工智慧分析您的肌膚狀況，推薦最適合的療程方案。',
    ai_step1_title: '拍攝肌膚照片',
    ai_step1_desc: '在自然光下素顏自拍，讓 AI 進行最精準的分析。',
    ai_step2_title: 'AI 智能分析',
    ai_step2_desc: 'AI 系統評估 8 項肌膚指標：保濕度、色斑、痘痘、皺紋、毛孔等。',
    ai_step3_title: '獲取結果',
    ai_step3_desc: '詳細報告與 HR07 專家的個人化療程建議。',
    ai_cta: '立即分析肌膚',

    // Contact Section
    contact_label: '聯繫我們',
    contact_title: '預約諮詢',
    contact_desc: '立即聯繫，享受免費諮詢與 HR07 頂級美容服務。',
    contact_address_title: '地址',
    contact_address: '10 [更新中]\n胡志明市三郡',
    contact_hours_title: '營業時間',
    contact_hours: '週一至週六：9:00 — 19:00\n週日：9:00 — 17:00',
    contact_zalo_title: 'Zalo 聯繫',
    contact_zalo_text: '透過 Zalo 直接諮詢',
    contact_zalo_link: '立即傳訊',

    // Before/After Section
    ba_label: '成果展示',
    ba_title: '術前術後對比',
    ba_desc: 'HR07 的真實治療案例——專業技術與自然效果的最佳證明。',
    ba_case1_title: '肉毒桿菌——瘦臉',
    ba_case1_desc: '治療後 2 週效果',
    ba_case2_title: '雷射除斑——皮秒雷射',
    ba_case2_desc: '3 次治療後效果',
    ba_case3_title: '玻尿酸——自然隆鼻',
    ba_case3_desc: '治療後即時效果',

    // Trust Signals Section
    trust_label: '品質承諾',
    trust_title: '國際標準——品質保證',
    trust_desc: 'HR07 使用全球頂尖品牌的正品設備與產品，確保最高安全性與最佳效果。',
    trust_equipment_title: '設備與技術',
    trust_products_title: '正品產品',
    trust_certs_title: '認證與標準',
    trust_cert1: '越南衛生部執業許可',
    trust_cert2: '國際認證醫師',
    trust_cert3: 'FDA / CE 認證產品',
    trust_stat1_num: '15+',
    trust_stat1_label: '年臨床經驗',
    trust_stat2_num: '5,000+',
    trust_stat2_label: '成功治療案例',
    trust_stat3_num: '100%',
    trust_stat3_label: '正品產品',
    trust_stat4_num: '4.9',
    trust_stat4_label: '平均評分',

    // Testimonials Section
    testimonials_label: '客戶評價',
    testimonials_title: '客戶怎麼說',
    testimonials_desc: '客戶的滿意是我們服務品質的最佳衡量。',
    testimonial1_text: '"第一次打肉毒桿菌很緊張，但醫師諮詢很仔細，施打很溫柔。效果非常自然，沒有人知道我做了醫美。"',
    testimonial1_name: 'Thanh Trúc',
    testimonial1_service: '肉毒桿菌——瘦臉',
    testimonial2_text: '"診所空間非常漂亮、高檔。工作人員熱情，台灣醫師非常專業。我已經推薦給很多朋友了。"',
    testimonial2_name: 'Minh Anh',
    testimonial2_service: '水光針——深層補水',
    testimonial3_text: '"我被色斑困擾多年，試過很多地方都沒效。在 HR07 做了 3 次雷射後，皮膚明顯變亮。非常感謝醫師！"',
    testimonial3_name: 'Hồng Nhung',
    testimonial3_service: '雷射除斑——皮秒雷射',

    // FAQ Section
    faq_label: '常見問題',
    faq_title: '疑問解答',
    faq_desc: '關於 HR07 服務與流程最常見的問題。',
    faq_q1: '打肉毒桿菌會痛嗎？需要多久？',
    faq_a1: '肉毒桿菌注射幾乎無感，只有輕微的針刺感。整個過程只需 15-20 分鐘，結束後即可正常活動。3-7 天後效果明顯，維持 4-6 個月。',
    faq_q2: '打玻尿酸安全嗎？會有副作用嗎？',
    faq_a2: 'HR07 只使用 Allergan 和 Galderma 正品玻尿酸，獲 FDA 認證。醫師擁有超過 15 年經驗，已完成數千例注射。使用正品產品加上專業醫師，併發症極為罕見。',
    faq_q3: '台灣醫師經常在嗎？',
    faq_a3: '鄭志紘醫師每週大部分時間都在 HR07 駐診。此外，我們還有持越南執照的皮膚科醫師團隊，確保隨時有專家為您服務。',
    faq_q4: 'HR07 支援哪些語言？',
    faq_a4: '我們提供越語、中文（普通話）、英語和韓語諮詢服務。台灣醫師可直接用中文和英語溝通。',
    faq_q5: '預約流程是怎樣的？',
    faq_a5: '您可以通過 Zalo、WhatsApp 或電話預約。工作人員會初步諮詢並安排合適時間。到診所後，醫師會詳細檢查和諮詢後才開始治療。',

    // Footer
    footer_copyright: '\u00A9 2024 HR07 Beauty Clinic. All rights reserved.',
    footer_address: '胡志明市三郡，越南',
  },

  // ============================================================
  // JAPANESE (日本語)
  // ============================================================
  ja: {
    // Navigation
    nav_about: '紹介',
    nav_services: 'サービス',
    nav_space: '空間',
    nav_ai_skin: 'AI肌分析',
    nav_contact: 'お問い合わせ',
    nav_doctor: '医師',
    nav_skin_test: '肌分析',

    // Hero Section
    hero_subtitle: 'Beauty Clinic',
    hero_tagline: '美しさを、新たな高みへ',
    hero_cta: 'サービスを見る',

    // About Section
    about_label: '私たちについて',
    about_title: '専門技術の融合 — 美の追求',
    about_desc: 'HR07 Beauty Clinicは台湾トップクラスの医療美容技術とアジア肌への深い理解を融合し、3区で最上級の美容体験をお届けします。',
    about_feature1_title: '台湾の専門家',
    about_feature1_desc: '15年以上の美容外科経験を持つ医師が、先進技術と国際的な安全基準をご提供します。',
    about_feature2_title: 'ベトナム医師',
    about_feature2_desc: 'ベトナム免許取得の皮膚科医チームが、アジア肌の特性とニーズを熟知しています。',
    about_feature3_title: '一等地',
    about_feature3_desc: '3区の中心に位置する国際水準のラグジュアリー空間で、プライベートで洗練された体験を。',

    // Services Section
    services_label: 'サービス',
    services_title: 'トータル美容ソリューション',
    services_desc: 'すべての施術は一人ひとりに合わせて設計され、最新技術と専門技術で最も自然な結果をお届けします。',

    service1_name: 'ボトックス注射',
    service1_desc: 'シワ除去、小顔効果、多汗症改善',
    service1_price: '3,000,000 VND〜',

    service2_name: 'ヒアルロン酸注入',
    service2_desc: '鼻筋形成、ほうれい線改善、唇形成',
    service2_price: '5,000,000 VND〜',

    service3_name: 'コラーゲンスレッド',
    service3_desc: '切らないリフトアップ・引き締め、総合エイジングケア',
    service3_price: '8,000,000 VND〜',

    service4_name: 'レーザーシミ治療',
    service4_desc: 'ピコレーザーでシミ・そばかす・色素沈着を除去',
    service4_price: '3,000,000 VND〜',

    service5_name: 'スキンブースター',
    service5_desc: '深層保湿、肌質・肌理の改善',
    service5_price: '4,000,000 VND〜',

    service6_name: 'バイオピーリング',
    service6_desc: '肌表面の再生、毛穴縮小、美白効果',
    service6_price: '2,000,000 VND〜',

    service7_name: 'メソセラピー',
    service7_desc: '微細注入で美容成分を導入、肌の若返りと修復',
    service7_price: '3,000,000 VND〜',

    service8_name: 'ニキビ集中治療',
    service8_desc: 'レーザー・薬物治療とオーダーメイドプログラム',
    service8_price: '2,000,000 VND〜',

    // Doctor Section
    doctor_label: '医師紹介',
    doctor_title: '台湾医師が直接施術',
    doctor_desc: 'HR07では、すべての施術を台湾の専門医が直接カウンセリング・施術 — 正確な技術と最高の安全性をお約束します。',
    doctor_badge: '台湾医師',
    doctor_name: '鄭志紘 医師',
    doctor_bio: '台湾出身の外科専門医、15年以上の医療美容臨床経験。台湾のトップ病院・美容クリニックで経験を積み、先進技術とナチュラルビューティーの哲学をベトナムへ。',
    doctor_spec1: 'マイクロ整形注射（ボトックス・フィラー）',
    doctor_spec2: 'レーザー光治療',
    doctor_spec3: 'アンチエイジング医学',
    doctor_spec4: '15年以上の臨床経験',

    // Space Section
    space_label: '空間',
    space_title: 'HR07の空間',
    space_desc: 'すべてのライン、すべての光が丁寧に設計された究極のリラクゼーション空間 — 都会の中心で安らぎを。',
    space_design_title: '自然からインスピレーションを得たデザイン',
    space_design_desc1: '波や花びらの有機的な曲線からインスピレーションを得て、HR07は従来のクリニックとは全く異なる空間を創出 — 冷たい診療所ではなく、高級スパリゾートのような温もり。',
    space_design_desc2: '各施術室は防音ガラスで仕切られ、完全なプライバシーを確保しています。',
    space_feature_1: '3D波形彫刻ウォール',
    space_feature_2: 'ウォームゴールドLED照明',
    space_feature_3: 'フラワーアート装飾',
    space_feature_4: '高級レザー家具',
    space_feature_5: '天然マーブルフロア',
    space_feature_6: 'グリーンインテリア',

    // AI Skin Analysis Section
    ai_label: 'AIテクノロジー',
    ai_title: 'AI無料肌診断',
    ai_desc: '最先端AIで肌の状態を分析し、最適な施術プランをご提案します。',
    ai_step1_title: '肌写真を撮影',
    ai_step1_desc: '自然光の下、すっぴんでセルフィーを撮影。AIが正確に分析します。',
    ai_step2_title: 'AI分析',
    ai_step2_desc: 'AIが保湿度・シミ・ニキビ・シワ・毛穴など8項目を総合評価。',
    ai_step3_title: '結果を受け取る',
    ai_step3_desc: '詳細レポートとHR07専門家によるオーダーメイド施術のご提案。',
    ai_cta: '今すぐ肌分析',

    // Contact Section
    contact_label: 'お問い合わせ',
    contact_title: 'ご予約',
    contact_desc: '無料カウンセリングとHR07の上質な美容サービスをお気軽にお問い合わせください。',
    contact_address_title: '住所',
    contact_address: '10 [更新中]\nホーチミン市3区',
    contact_hours_title: '営業時間',
    contact_hours: '月〜土：9:00 — 19:00\n日：9:00 — 17:00',
    contact_zalo_title: 'Zaloでお問い合わせ',
    contact_zalo_text: 'Zaloで直接チャット',
    contact_zalo_link: '今すぐメッセージ',

    // Before/After Section
    ba_label: '施術結果',
    ba_title: 'ビフォー＆アフター',
    ba_desc: 'HR07の実際の施術症例 — 専門技術と自然な仕上がりの証。',
    ba_case1_title: 'ボトックス — 小顔効果',
    ba_case1_desc: '施術後2週間の結果',
    ba_case2_title: 'レーザーシミ治療 — ピコレーザー',
    ba_case2_desc: '3回施術後の結果',
    ba_case3_title: 'フィラー — ナチュラル鼻筋形成',
    ba_case3_desc: '施術直後の結果',

    // Trust Signals Section
    trust_label: '品質保証',
    trust_title: '国際基準 — 品質保証',
    trust_desc: 'HR07は世界トップブランドの正規品機器・製品を使用し、最高の安全性と効果を保証します。',
    trust_equipment_title: '機器＆テクノロジー',
    trust_products_title: '正規品',
    trust_certs_title: '認証＆基準',
    trust_cert1: 'ベトナム保健省営業許可',
    trust_cert2: '国際認定医師',
    trust_cert3: 'FDA / CE 認証製品',
    trust_stat1_num: '15+',
    trust_stat1_label: '年の臨床経験',
    trust_stat2_num: '5,000+',
    trust_stat2_label: '成功症例',
    trust_stat3_num: '100%',
    trust_stat3_label: '正規品使用',
    trust_stat4_num: '4.9',
    trust_stat4_label: '平均評価',

    // Testimonials Section
    testimonials_label: 'お客様の声',
    testimonials_title: 'お客様からの評価',
    testimonials_desc: 'お客様の満足が私たちのサービス品質の最高の証です。',
    testimonial1_text: '「初めてのボトックスで不安でしたが、先生が丁寧にカウンセリングしてくれて、施術も優しかったです。仕上がりがとても自然で、誰にもバレません。」',
    testimonial1_name: 'Thanh Trúc',
    testimonial1_service: 'ボトックス — 小顔',
    testimonial2_text: '「クリニックの空間がとても綺麗で高級感があります。スタッフも親切で、台湾の先生もとてもプロフェッショナル。友人にもたくさん紹介しました。」',
    testimonial2_name: 'Minh Anh',
    testimonial2_service: 'スキンブースター — 深層保湿',
    testimonial3_text: '「長年シミに悩んでいて、他のクリニックでも効果がなかったのですが、HR07で3回レーザーを受けたら肌が明るくなりました。先生に感謝です！」',
    testimonial3_name: 'Hồng Nhung',
    testimonial3_service: 'レーザーシミ治療 — ピコレーザー',

    // FAQ Section
    faq_label: 'よくある質問',
    faq_title: '疑問にお答えします',
    faq_desc: 'HR07のサービスと施術に関するよくある質問。',
    faq_q1: 'ボトックス注射は痛いですか？どのくらい時間がかかりますか？',
    faq_a1: 'ボトックス注射はほぼ無痛で、軽い針のチクッとした感覚のみです。全体で15-20分程度で完了し、施術後すぐに日常生活に戻れます。効果は3-7日後に現れ、4-6ヶ月持続します。',
    faq_q2: 'フィラー注入は安全ですか？副作用はありますか？',
    faq_a2: 'HR07ではFDA認証のAllerganとGalderma正規品フィラーのみを使用しています。医師は15年以上の経験で数千件のフィラー注入実績があります。正規品と経験豊富な医師の組み合わせで、合併症は極めて稀です。',
    faq_q3: '台湾の先生は常駐していますか？',
    faq_a3: '鄭志紘医師は週のほとんどをHR07で診療しています。また、ベトナム免許取得済みの皮膚科医チームも常駐しており、いつでも専門家にご相談いただけます。',
    faq_q4: 'HR07ではどの言語に対応していますか？',
    faq_a4: 'ベトナム語、中国語（普通話）、英語、韓国語でのカウンセリングに対応しています。台湾の医師は中国語と英語で直接コミュニケーションできます。',
    faq_q5: '予約の流れを教えてください。',
    faq_a5: 'Zalo、WhatsApp、または電話でご予約いただけます。スタッフが初期カウンセリングを行い、ご都合の良い日時を調整します。来院後、医師が詳しく診察・カウンセリングしてから施術を開始します。',

    // Footer
    footer_copyright: '\u00A9 2024 HR07 Beauty Clinic. All rights reserved.',
    footer_address: 'ホーチミン市3区、ベトナム',
  },

  // ============================================================
  // KOREAN (한국어)
  // ============================================================
  ko: {
    // Navigation
    nav_about: '소개',
    nav_services: '서비스',
    nav_space: '공간',
    nav_ai_skin: 'AI 피부분석',
    nav_contact: '연락처',
    nav_doctor: '의료진',
    nav_skin_test: '피부분석',

    // Hero Section
    hero_subtitle: 'Beauty Clinic',
    hero_tagline: '아름다움을 한 단계 높이다',
    hero_cta: '서비스 둘러보기',

    // About Section
    about_label: '소개',
    about_title: '전문성의 결합 — 아름다움의 추구',
    about_desc: 'HR07 Beauty Clinic은 대만 최고 수준의 의료미용 기술과 아시아 피부에 대한 깊은 이해를 결합하여 3군에서 최상급 미용 경험을 제공합니다.',
    about_feature1_title: '대만 전문가',
    about_feature1_desc: '15년 이상의 미용외과 경력을 가진 의사가 첨단 기술과 국제적 안전 기준을 제공합니다.',
    about_feature2_title: '베트남 의사',
    about_feature2_desc: '베트남 면허 보유 피부과 의료진이 아시아 피부의 특성과 고객 니즈를 깊이 이해합니다.',
    about_feature3_title: '프리미엄 위치',
    about_feature3_desc: '3군 중심부에 위치한 국제 수준의 럭셔리 공간에서 프라이빗하고 세련된 경험을.',

    // Services Section
    services_label: '서비스',
    services_title: '토탈 뷰티 솔루션',
    services_desc: '모든 시술은 개인 맞춤 설계되며, 최신 기술과 전문 기법으로 가장 자연스러운 결과를 제공합니다.',

    service1_name: '보톡스 주사',
    service1_desc: '주름 제거, 턱선 축소, 다한증 개선',
    service1_price: '3,000,000 VND부터',

    service2_name: '필러 주입',
    service2_desc: '코 높임, 팔자주름 개선, 입술 성형',
    service2_price: '5,000,000 VND부터',

    service3_name: '콜라겐 실 리프팅',
    service3_desc: '비수술 리프팅·탄력 개선, 종합 안티에이징',
    service3_price: '8,000,000 VND부터',

    service4_name: '레이저 기미치료',
    service4_desc: '피코레이저로 기미, 주근깨, 색소 침착 제거',
    service4_price: '3,000,000 VND부터',

    service5_name: '스킨부스터',
    service5_desc: '심층 보습, 피부결 및 피부 상태 개선',
    service5_price: '4,000,000 VND부터',

    service6_name: '바이오필링',
    service6_desc: '피부 표면 재생, 모공 축소, 피부 톤 개선',
    service6_price: '2,000,000 VND부터',

    service7_name: '메조테라피',
    service7_desc: '미세 주입으로 영양 성분 전달, 피부 회춘 및 복원',
    service7_price: '3,000,000 VND부터',

    service8_name: '여드름 집중치료',
    service8_desc: '레이저, 약물 치료와 맞춤형 프로그램 결합',
    service8_price: '2,000,000 VND부터',

    // Doctor Section
    doctor_label: '의료진',
    doctor_title: '대만 의사가 직접 시술',
    doctor_desc: 'HR07에서는 모든 시술을 대만 전문의가 직접 상담하고 시술합니다 — 정확한 기술과 최고의 안전성을 보장합니다.',
    doctor_badge: '대만 의사',
    doctor_name: '정지굉 의사',
    doctor_bio: '대만 출신 외과 전문의, 15년 이상의 의료미용 임상 경험. 대만 최고 병원과 미용 클리닉에서 경력을 쌓은 후 베트남으로, 첨단 기술과 자연스러운 미학 철학을 전합니다.',
    doctor_spec1: '마이크로 성형 주사 (보톡스, 필러)',
    doctor_spec2: '레이저 광 치료',
    doctor_spec3: '안티에이징 의학',
    doctor_spec4: '15년 이상 임상 경험',

    // Space Section
    space_label: '공간',
    space_title: 'HR07 공간',
    space_desc: '모든 라인, 모든 빛이 세심하게 설계된 궁극의 힐링 공간 — 도심 속에서 평온함을 찾으세요.',
    space_design_title: '자연에서 영감을 얻은 디자인',
    space_design_desc1: '파도와 꽃잎의 유기적 곡선에서 영감을 받아 HR07은 기존 클리닉과는 완전히 다른 공간을 창조 — 차가운 병원이 아닌, 고급 스파 리조트 같은 따뜻함.',
    space_design_desc2: '각 치료실은 방음 유리로 분리되어 고객의 완벽한 프라이버시를 보장합니다.',
    space_feature_1: '3D 웨이브 조각 벽',
    space_feature_2: '웜골드 LED 조명',
    space_feature_3: '플라워 아트 장식',
    space_feature_4: '프리미엄 가죽 가구',
    space_feature_5: '천연 대리석 바닥',
    space_feature_6: '그린 인테리어',

    // AI Skin Analysis Section
    ai_label: 'AI 기술',
    ai_title: 'AI 무료 피부분석',
    ai_desc: '최첨단 AI로 피부 상태를 분석하고 최적의 시술 플랜을 추천합니다.',
    ai_step1_title: '피부 사진 촬영',
    ai_step1_desc: '자연광 아래 맨 얼굴로 셀카를 촬영하면 AI가 정확하게 분석합니다.',
    ai_step2_title: 'AI 분석',
    ai_step2_desc: 'AI가 보습도, 기미, 여드름, 주름, 모공 등 8가지 항목을 종합 평가.',
    ai_step3_title: '결과 확인',
    ai_step3_desc: '상세 리포트와 HR07 전문가의 맞춤 시술 제안.',
    ai_cta: '지금 피부분석',

    // Contact Section
    contact_label: '연락처',
    contact_title: '예약하기',
    contact_desc: '무료 상담과 HR07의 프리미엄 뷰티 서비스를 지금 바로 문의하세요.',
    contact_address_title: '주소',
    contact_address: '10 [업데이트 중]\n호치민시 3군',
    contact_hours_title: '영업시간',
    contact_hours: '월~토: 9:00 — 19:00\n일: 9:00 — 17:00',
    contact_zalo_title: 'Zalo 문의',
    contact_zalo_text: 'Zalo로 직접 상담',
    contact_zalo_link: '지금 메시지',

    // Before/After Section
    ba_label: '시술 결과',
    ba_title: '비포 & 애프터',
    ba_desc: 'HR07의 실제 시술 사례 — 전문 기술과 자연스러운 결과의 증거.',
    ba_case1_title: '보톡스 — 턱선 축소',
    ba_case1_desc: '시술 후 2주 결과',
    ba_case2_title: '레이저 기미치료 — 피코레이저',
    ba_case2_desc: '3회 시술 후 결과',
    ba_case3_title: '필러 — 자연스러운 코 높임',
    ba_case3_desc: '시술 직후 결과',

    // Trust Signals Section
    trust_label: '품질 보증',
    trust_title: '국제 기준 — 품질 보장',
    trust_desc: 'HR07은 세계 최고 브랜드의 정품 장비와 제품을 사용하여 최고의 안전성과 효과를 보장합니다.',
    trust_equipment_title: '장비 & 기술',
    trust_products_title: '정품 제품',
    trust_certs_title: '인증 & 기준',
    trust_cert1: '베트남 보건부 영업 허가',
    trust_cert2: '국제 인증 의사',
    trust_cert3: 'FDA / CE 인증 제품',
    trust_stat1_num: '15+',
    trust_stat1_label: '년 임상 경험',
    trust_stat2_num: '5,000+',
    trust_stat2_label: '성공 시술 사례',
    trust_stat3_num: '100%',
    trust_stat3_label: '정품 사용',
    trust_stat4_num: '4.9',
    trust_stat4_label: '평균 평점',

    // Testimonials Section
    testimonials_label: '고객 후기',
    testimonials_title: '고객들의 평가',
    testimonials_desc: '고객의 만족이 우리 서비스 품질의 최고의 척도입니다.',
    testimonial1_text: '"처음 보톡스를 맞아서 긴장했는데, 의사 선생님이 꼼꼼하게 상담해주시고 부드럽게 시술해주셨어요. 결과가 너무 자연스러워서 아무도 몰라요."',
    testimonial1_name: 'Thanh Trúc',
    testimonial1_service: '보톡스 — 턱선 축소',
    testimonial2_text: '"클리닉 공간이 정말 예쁘고 고급스러워요. 직원들도 친절하고 대만 의사 선생님도 매우 전문적이에요. 친구들에게 많이 추천했어요."',
    testimonial2_name: 'Minh Anh',
    testimonial2_service: '스킨부스터 — 심층 보습',
    testimonial3_text: '"오래된 기미 때문에 여러 곳을 다녀봤지만 효과가 없었어요. HR07에서 레이저 3회 받고 피부가 확 밝아졌어요. 선생님 정말 감사합니다!"',
    testimonial3_name: 'Hồng Nhung',
    testimonial3_service: '레이저 기미치료 — 피코레이저',

    // FAQ Section
    faq_label: '자주 묻는 질문',
    faq_title: '궁금증 해결',
    faq_desc: 'HR07 서비스와 시술에 대한 가장 많이 묻는 질문들.',
    faq_q1: '보톡스 주사가 아픈가요? 시간이 얼마나 걸리나요?',
    faq_a1: '보톡스 주사는 거의 무통이며, 가벼운 찌르는 느낌만 있습니다. 전체 과정은 15-20분이면 완료되며, 시술 후 바로 일상생활이 가능합니다. 3-7일 후 효과가 나타나며 4-6개월 유지됩니다.',
    faq_q2: '필러 주입은 안전한가요? 부작용이 있나요?',
    faq_a2: 'HR07은 FDA 인증 Allergan과 Galderma 정품 필러만 사용합니다. 의사는 15년 이상의 경험으로 수천 건의 필러 시술을 수행했습니다. 정품 제품과 숙련된 의사로 합병증은 매우 드뭅니다.',
    faq_q3: '대만 의사가 상주하나요?',
    faq_a3: '정지굉 의사는 주중 대부분 HR07에서 진료합니다. 또한 베트남 면허 보유 피부과 의사팀이 상주하여 언제든 전문가 상담을 받으실 수 있습니다.',
    faq_q4: 'HR07에서 어떤 언어를 지원하나요?',
    faq_a4: '베트남어, 중국어(만다린), 영어, 한국어로 상담이 가능합니다. 대만 의사는 중국어와 영어로 직접 소통할 수 있습니다.',
    faq_q5: '예약 절차는 어떻게 되나요?',
    faq_a5: 'Zalo, WhatsApp 또는 전화로 예약하실 수 있습니다. 직원이 초기 상담 후 적합한 시간을 조율합니다. 내원 후 의사가 상세히 진찰하고 상담한 뒤 시술을 시작합니다.',

    // Footer
    footer_copyright: '\u00A9 2024 HR07 Beauty Clinic. All rights reserved.',
    footer_address: '호치민시 3군, 베트남',
  },

  // ============================================================
  // ENGLISH
  // ============================================================
  en: {
    // Navigation
    nav_about: 'About',
    nav_services: 'Services',
    nav_space: 'Space',
    nav_ai_skin: 'AI Skin',
    nav_contact: 'Contact',
    nav_doctor: 'Doctor',
    nav_skin_test: 'Skin Analysis',

    // Hero Section
    hero_subtitle: 'Beauty Clinic',
    hero_tagline: 'Where beauty is elevated',
    hero_cta: 'Explore Services',

    // About Section
    about_label: 'About Us',
    about_title: 'Expertise Meets Beauty',
    about_desc: 'HR07 Beauty Clinic combines top-tier Taiwanese medical aesthetics with deep understanding of Asian skin, delivering a premium beauty experience in District 3.',
    about_feature1_title: 'Taiwanese Expert',
    about_feature1_desc: 'Board-certified surgeon with over 15 years of aesthetic experience, bringing advanced techniques and international safety standards.',
    about_feature2_title: 'Vietnamese Doctors',
    about_feature2_desc: 'Licensed dermatologists in Vietnam who deeply understand Asian skin characteristics and client needs.',
    about_feature3_title: 'Prime Location',
    about_feature3_desc: 'Located in the heart of District 3 — HCMC, with international-standard luxury design, private and refined.',

    // Services Section
    services_label: 'Services',
    services_title: 'Comprehensive Beauty Solutions',
    services_desc: 'Each treatment is individually designed, combining modern technology and specialized techniques for the most natural results.',

    service1_name: 'Botox Injection',
    service1_desc: 'Wrinkle removal, jawline slimming, effective sweat reduction',
    service1_price: 'From 3,000,000 VND',

    service2_name: 'Filler Injection',
    service2_desc: 'Nose augmentation, smile line filling, natural lip shaping',
    service2_price: 'From 5,000,000 VND',

    service3_name: 'Collagen Thread',
    service3_desc: 'Non-surgical lifting, skin tightening, comprehensive rejuvenation',
    service3_price: 'From 8,000,000 VND',

    service4_name: 'Pico Laser',
    service4_desc: 'Pico laser technology for melasma, freckles, and dark spots',
    service4_price: 'From 3,000,000 VND',

    service5_name: 'Skin Booster',
    service5_desc: 'Deep hydration, improving skin texture from within',
    service5_price: 'From 4,000,000 VND',

    service6_name: 'Bio Peel',
    service6_desc: 'Skin surface renewal, pore minimizing, brightening',
    service6_price: 'From 2,000,000 VND',

    service7_name: 'Mesotherapy',
    service7_desc: 'Micro-injection nutrients for skin rejuvenation & restoration',
    service7_price: 'From 3,000,000 VND',

    service8_name: 'Acne Treatment',
    service8_desc: 'Combined laser, medication & personalized treatment plan',
    service8_price: 'From 2,000,000 VND',

    // Doctor Section
    doctor_label: 'Our Doctor',
    doctor_title: 'Taiwanese Doctor — Personally Performed',
    doctor_desc: 'At HR07, every treatment is personally consulted and performed by a specialist from Taiwan — ensuring precise technique and the safest results.',
    doctor_badge: 'Taiwanese Doctor',
    doctor_name: 'Dr. Cheng Chih-Hung',
    doctor_bio: 'Board-certified surgeon from Taiwan with over 15 years of clinical experience in medical aesthetics. Previously practiced at top hospitals and aesthetic centers in Taiwan, bringing advanced techniques and a philosophy of natural beauty.',
    doctor_spec1: 'Micro-aesthetic Injections (Botox, Filler)',
    doctor_spec2: 'Laser & Light Therapy',
    doctor_spec3: 'Anti-aging Medicine',
    doctor_spec4: 'Over 15 Years of Clinical Experience',

    // Space Section
    space_label: 'Space',
    space_title: 'HR07 Space',
    space_desc: 'Every line, every light is carefully crafted to create an absolute relaxation space — find peace in the heart of the city.',
    space_design_title: 'Nature-Inspired Design',
    space_design_desc1: 'Inspired by the organic curves of ocean waves and flower petals, HR07 offers a completely different aesthetic space — not a cold clinic, but as warm as a luxury spa resort.',
    space_design_desc2: 'Each treatment room is separated by soundproof glass, ensuring absolute privacy for clients.',
    space_feature_1: '3D Wave Sculpture Wall',
    space_feature_2: 'Warm Gold LED Lighting',
    space_feature_3: 'Floral Art Decor',
    space_feature_4: 'Premium Leather Furniture',
    space_feature_5: 'Natural Marble Flooring',
    space_feature_6: 'Green Plant Accents',

    // AI Skin Analysis Section
    ai_label: 'AI Technology',
    ai_title: 'Free AI Skin Analysis',
    ai_desc: 'Using advanced AI to analyze your skin condition and recommend the most suitable treatment for you.',
    ai_step1_title: 'Take a Photo',
    ai_step1_desc: 'Take a selfie in natural light, without makeup, for the most accurate AI analysis.',
    ai_step2_title: 'AI Analysis',
    ai_step2_desc: 'The AI system evaluates 8 skin metrics: hydration, melasma, acne, wrinkles, pores and more.',
    ai_step3_title: 'Get Results',
    ai_step3_desc: 'Detailed report and personalized treatment recommendations from HR07 experts.',
    ai_cta: 'Analyze Skin Now',

    // Contact Section
    contact_label: 'Contact',
    contact_title: 'Book an Appointment',
    contact_desc: 'Contact us now for a free consultation and experience premium beauty services at HR07.',
    contact_address_title: 'Address',
    contact_address: '10 [Updating]\nDistrict 3, Ho Chi Minh City',
    contact_hours_title: 'Working Hours',
    contact_hours: 'Mon — Sat: 9:00 — 19:00\nSunday: 9:00 — 17:00',
    contact_zalo_title: 'Contact via Zalo',
    contact_zalo_text: 'Chat directly via Zalo',
    contact_zalo_link: 'Message Now',

    // Before/After Section
    ba_label: 'Results',
    ba_title: 'Before & After',
    ba_desc: 'Real treatment cases at HR07 — clear proof of professional technique and natural results.',
    ba_case1_title: 'Botox — Jawline Slimming',
    ba_case1_desc: 'Results after 2 weeks',
    ba_case2_title: 'Pico Laser — Melasma Treatment',
    ba_case2_desc: 'Results after 3 sessions',
    ba_case3_title: 'Filler — Natural Nose Augmentation',
    ba_case3_desc: 'Immediate results',

    // Trust Signals Section
    trust_label: 'Quality Assurance',
    trust_title: 'International Standards — Guaranteed Quality',
    trust_desc: 'HR07 uses authentic equipment and products from the world\'s leading brands, ensuring maximum safety and effectiveness.',
    trust_equipment_title: 'Equipment & Technology',
    trust_products_title: 'Authentic Products',
    trust_certs_title: 'Certifications & Standards',
    trust_cert1: 'Vietnam Ministry of Health License',
    trust_cert2: 'Internationally Certified Doctor',
    trust_cert3: 'FDA / CE Approved Products',
    trust_stat1_num: '15+',
    trust_stat1_label: 'Years of Experience',
    trust_stat2_num: '5,000+',
    trust_stat2_label: 'Successful Treatments',
    trust_stat3_num: '100%',
    trust_stat3_label: 'Authentic Products',
    trust_stat4_num: '4.9',
    trust_stat4_label: 'Average Rating',

    // Testimonials Section
    testimonials_label: 'Reviews',
    testimonials_title: 'What Our Clients Say',
    testimonials_desc: 'Client satisfaction is the ultimate measure of our service quality.',
    testimonial1_text: '"It was my first time getting Botox and I was nervous, but the doctor consulted thoroughly and performed gently. The result is so natural — nobody knows I had anything done."',
    testimonial1_name: 'Thanh Truc',
    testimonial1_service: 'Botox — Jawline Slimming',
    testimonial2_text: '"The clinic space is beautiful and luxurious. Staff are enthusiastic, and the Taiwanese doctor is very professional. I\'ve recommended HR07 to many friends."',
    testimonial2_name: 'Minh Anh',
    testimonial2_service: 'Skin Booster — Deep Hydration',
    testimonial3_text: '"I had melasma for years and tried many clinics without results. After 3 laser sessions at HR07, my skin is noticeably brighter. Thank you so much, doctor!"',
    testimonial3_name: 'Hong Nhung',
    testimonial3_service: 'Pico Laser — Melasma Treatment',

    // FAQ Section
    faq_label: 'FAQ',
    faq_title: 'Frequently Asked Questions',
    faq_desc: 'The most common questions about our services and procedures at HR07.',
    faq_q1: 'Does Botox injection hurt? How long does it take?',
    faq_a1: 'Botox injection is virtually painless — just a slight pinch sensation. The entire process takes only 15-20 minutes. You can return to normal activities immediately. Results appear after 3-7 days and last 4-6 months.',
    faq_q2: 'Is filler injection safe? Are there complications?',
    faq_a2: 'HR07 exclusively uses FDA-certified authentic fillers from Allergan and Galderma. Our doctor has over 15 years of experience performing thousands of filler injections. Complications are extremely rare with skilled doctors and authentic products.',
    faq_q3: 'Is the Taiwanese doctor available regularly?',
    faq_a3: 'Dr. Cheng Chih-Hung practices at HR07 most days of the week. Additionally, our team of licensed Vietnamese dermatologists ensures expert consultation is always available.',
    faq_q4: 'What languages does HR07 support?',
    faq_a4: 'We offer consultations in Vietnamese, Chinese (Mandarin), English, and Korean. The Taiwanese doctor communicates directly in Chinese and English.',
    faq_q5: 'What is the appointment process?',
    faq_a5: 'You can book via Zalo, WhatsApp, or phone call. Our staff will provide initial consultation and arrange a suitable time. At the clinic, the doctor will conduct a thorough examination and consultation before beginning treatment.',

    // Footer
    footer_copyright: '\u00A9 2024 HR07 Beauty Clinic. All rights reserved.',
    footer_address: 'District 3, Ho Chi Minh City, Vietnam',
  },
};


// ============================================================
// Language Switcher Helper Functions
// ============================================================

/**
 * Set the active language and update all translated elements on the page.
 * Elements must have a `data-i18n` attribute matching a translation key.
 * For elements with innerHTML (containing <br> or <a> tags), use data-i18n-html.
 *
 * @param {string} lang - Language code: 'vi', 'zh', 'ja', or 'ko'
 */
function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('hr07_lang', lang);

  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) {
      el.innerHTML = t[key].replace(/\n/g, '<br>');
    }
  });

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/**
 * Initialize language on page load.
 * Priority: saved preference > browser language > Vietnamese (default)
 */
function initLanguage() {
  const saved = localStorage.getItem('hr07_lang');
  if (saved && TRANSLATIONS[saved]) {
    return setLanguage(saved);
  }

  const browserLang = navigator.language.slice(0, 2);
  const supported = ['vi', 'zh', 'ja', 'ko', 'en'];
  setLanguage(supported.includes(browserLang) ? browserLang : 'vi');
}
