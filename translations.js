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
    service1_price: '3.000.000 - 8.000.000đ',

    service2_name: 'Tiêm Filler',
    service2_desc: 'Nâng mũi, làm đầy rãnh cười, tạo hình môi tự nhiên',
    service2_price: '5.000.000 - 15.000.000đ',

    service3_name: 'Chỉ Collagen',
    service3_desc: 'Nâng cơ, căng da không phẫu thuật, trẻ hóa toàn diện',
    service3_price: '8.000.000 - 25.000.000đ',

    service4_name: 'Laser Trị Nám',
    service4_desc: 'Công nghệ Pico laser xóa nám, tàn nhang, đốm nâu',
    service4_price: '3.000.000 - 10.000.000đ',

    service5_name: 'Skinbooster',
    service5_desc: 'Cấp ẩm sâu, cải thiện kết cấu da từ bên trong',
    service5_price: '4.000.000 - 12.000.000đ',

    service6_name: 'Peel Da Sinh Học',
    service6_desc: 'Tái tạo bề mặt da, thu nhỏ lỗ chân lông, sáng da',
    service6_price: '2.000.000 - 5.000.000đ',

    service7_name: 'Mesotherapy',
    service7_desc: 'Vi điểm dưỡng chất, trẻ hóa & phục hồi da toàn diện',
    service7_price: '3.000.000 - 8.000.000đ',

    service8_name: 'Trị Mụn Chuyên Sâu',
    service8_desc: 'Kết hợp laser, thuốc & liệu trình cá nhân hóa',
    service8_price: '2.000.000 - 7.000.000đ',

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
    service1_price: '3,000,000 - 8,000,000 VND',

    service2_name: '玻尿酸填充',
    service2_desc: '隆鼻、填充法令紋、豐唇塑形，自然美麗',
    service2_price: '5,000,000 - 15,000,000 VND',

    service3_name: '膠原蛋白埋線',
    service3_desc: '非手術拉提緊緻、全面回春抗老',
    service3_price: '8,000,000 - 25,000,000 VND',

    service4_name: '雷射除斑',
    service4_desc: 'Pico皮秒雷射去除色斑、雀斑、褐斑',
    service4_price: '3,000,000 - 10,000,000 VND',

    service5_name: '水光針',
    service5_desc: '深層補水保濕、改善膚質與膚況',
    service5_price: '4,000,000 - 12,000,000 VND',

    service6_name: '生物煥膚',
    service6_desc: '肌膚表面重建、縮小毛孔、提亮膚色',
    service6_price: '2,000,000 - 5,000,000 VND',

    service7_name: '中胚層療法',
    service7_desc: '微點導入營養精華、回春修復肌膚',
    service7_price: '3,000,000 - 8,000,000 VND',

    service8_name: '深層祛痘療程',
    service8_desc: '結合雷射、藥物與個人化治療方案',
    service8_price: '2,000,000 - 7,000,000 VND',

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
    service1_price: '3,000,000 - 8,000,000 VND',

    service2_name: 'ヒアルロン酸注入',
    service2_desc: '鼻筋形成、ほうれい線改善、唇形成',
    service2_price: '5,000,000 - 15,000,000 VND',

    service3_name: 'コラーゲンスレッド',
    service3_desc: '切らないリフトアップ・引き締め、総合エイジングケア',
    service3_price: '8,000,000 - 25,000,000 VND',

    service4_name: 'レーザーシミ治療',
    service4_desc: 'ピコレーザーでシミ・そばかす・色素沈着を除去',
    service4_price: '3,000,000 - 10,000,000 VND',

    service5_name: 'スキンブースター',
    service5_desc: '深層保湿、肌質・肌理の改善',
    service5_price: '4,000,000 - 12,000,000 VND',

    service6_name: 'バイオピーリング',
    service6_desc: '肌表面の再生、毛穴縮小、美白効果',
    service6_price: '2,000,000 - 5,000,000 VND',

    service7_name: 'メソセラピー',
    service7_desc: '微細注入で美容成分を導入、肌の若返りと修復',
    service7_price: '3,000,000 - 8,000,000 VND',

    service8_name: 'ニキビ集中治療',
    service8_desc: 'レーザー・薬物治療とオーダーメイドプログラム',
    service8_price: '2,000,000 - 7,000,000 VND',

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
    service1_price: '3,000,000 - 8,000,000 VND',

    service2_name: '필러 주입',
    service2_desc: '코 높임, 팔자주름 개선, 입술 성형',
    service2_price: '5,000,000 - 15,000,000 VND',

    service3_name: '콜라겐 실 리프팅',
    service3_desc: '비수술 리프팅·탄력 개선, 종합 안티에이징',
    service3_price: '8,000,000 - 25,000,000 VND',

    service4_name: '레이저 기미치료',
    service4_desc: '피코레이저로 기미, 주근깨, 색소 침착 제거',
    service4_price: '3,000,000 - 10,000,000 VND',

    service5_name: '스킨부스터',
    service5_desc: '심층 보습, 피부결 및 피부 상태 개선',
    service5_price: '4,000,000 - 12,000,000 VND',

    service6_name: '바이오필링',
    service6_desc: '피부 표면 재생, 모공 축소, 피부 톤 개선',
    service6_price: '2,000,000 - 5,000,000 VND',

    service7_name: '메조테라피',
    service7_desc: '미세 주입으로 영양 성분 전달, 피부 회춘 및 복원',
    service7_price: '3,000,000 - 8,000,000 VND',

    service8_name: '여드름 집중치료',
    service8_desc: '레이저, 약물 치료와 맞춤형 프로그램 결합',
    service8_price: '2,000,000 - 7,000,000 VND',

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

    // Footer
    footer_copyright: '\u00A9 2024 HR07 Beauty Clinic. All rights reserved.',
    footer_address: '호치민시 3군, 베트남',
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
  const supported = ['vi', 'zh', 'ja', 'ko'];
  setLanguage(supported.includes(browserLang) ? browserLang : 'vi');
}
