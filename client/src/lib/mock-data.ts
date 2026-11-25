import type { Branch, Coach, GalleryAlbum, NewsArticle, ScheduleClass, Student, TuitionPlan } from '@/types';

const image = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const coaches: Coach[] = [
  { id: 'coach-1', createdAt: '2024-01-10', name: 'Nguyễn Anh Tuấn', role: 'Chủ nhiệm võ đường', bio: 'Hơn 20 năm theo đuổi Karate-do, thầy Tuấn tin rằng võ đạo bắt đầu từ cách chúng ta đối đãi với người bên cạnh.', image: image('photo-1549476464-37392f717541'), specialties: ['Karate truyền thống', 'Kumite'], yearsOfExperience: 20 },
  { id: 'coach-2', createdAt: '2024-02-10', name: 'Trần Minh Khôi', role: 'Huấn luyện viên trưởng', bio: 'Tập trung xây dựng nền tảng thể lực, kỹ thuật và tinh thần kỷ luật cho lứa tuổi thiếu niên.', image: image('photo-1552674605-db6ffd4facb5'), specialties: ['Kata', 'Thiếu niên'], yearsOfExperience: 12 },
  { id: 'coach-3', createdAt: '2024-03-10', name: 'Lê Hoàng Mai', role: 'HLV Karate trẻ em', bio: 'Mỗi buổi tập là một cơ hội để các em tự tin hơn, biết lắng nghe và biết nâng đỡ đồng đội.', image: image('photo-1594737625785-a6cbdabd333c'), specialties: ['Trẻ em', 'Kỹ năng mềm'], yearsOfExperience: 8 },
];

export const branches: Branch[] = [
  { id: 'branch-1', createdAt: '2023-05-10', name: 'Cơ sở Tịnh Trì', address: 'Nhà văn hóa Tịnh Trì, Thanh Liêm, Hà Nam', manager: 'Nguyễn Anh Tuấn', phone: '0988 123 456', status: 'active' },
  { id: 'branch-2', createdAt: '2023-10-10', name: 'Cơ sở Liêm Tuyền', address: 'Trung tâm thể thao Liêm Tuyền, Phủ Lý', manager: 'Trần Minh Khôi', phone: '0977 456 789', status: 'active' },
  { id: 'branch-3', createdAt: '2024-02-10', name: 'Cơ sở Thanh Hà', address: 'Nhà văn hóa Thanh Hà, Thanh Liêm, Hà Nam', manager: 'Lê Hoàng Mai', phone: '0966 234 567', status: 'active' },
];

export const news: NewsArticle[] = [
  { id: 'news-1', createdAt: '2025-01-08', title: 'Khai giảng lớp Karate mùa xuân 2025', slug: 'khai-giang-lop-karate-mua-xuan-2025', excerpt: 'Một mùa tập luyện mới bắt đầu — nơi những bước chân đầu tiên được nâng đỡ bằng tinh thần gia đình.', content: 'Tháng Giêng, võ đường mở thêm các lớp cơ bản dành cho người mới và các em nhỏ. Đây là thời điểm đẹp để bắt đầu một thói quen khỏe mạnh, kỷ luật và đầy niềm vui.', coverImage: image('photo-1555597673-b21d5c935865'), category: 'Hoạt động', status: 'published', publishedAt: '2025-01-08' },
  { id: 'news-2', createdAt: '2024-12-18', title: 'Một ngày hội ngộ của đại gia đình Tịnh Trì', slug: 'mot-ngay-hoi-ngo-cua-dai-gia-dinh-tinh-tri', excerpt: 'Những bài quyền, tiếng cười và câu chuyện được nối dài trong buổi giao lưu cuối năm.', content: 'Ngày hội là dịp để các võ sinh ở nhiều cơ sở cùng gặp gỡ, chia sẻ và nhìn lại hành trình đã đi qua.', coverImage: image('photo-1517836357463-d25dfeac3438'), category: 'Cộng đồng', status: 'published', publishedAt: '2024-12-18' },
  { id: 'news-3', createdAt: '2024-11-22', title: 'Vì sao trẻ em nên học võ từ sớm?', slug: 'vi-sao-tre-em-nen-hoc-vo-tu-som', excerpt: 'Karate giúp trẻ rèn sự tập trung, tự tin và khả năng tôn trọng người khác.', content: 'Học võ không chỉ là học cách ra đòn. Điều quan trọng hơn là xây dựng nền tảng thể chất và tâm thế bình tĩnh trước thử thách.', coverImage: image('photo-1603398938378-e54eab446dde'), category: 'Võ đạo', status: 'published', publishedAt: '2024-11-22' },
  { id: 'news-4', createdAt: '2024-10-09', title: 'Lịch thi lên đai quý IV', slug: 'lich-thi-len-dai-quy-iv', excerpt: 'Thông tin lịch thi và hướng dẫn chuẩn bị dành cho các võ sinh.', content: 'Các lớp sẽ được kiểm tra kỹ thuật theo lịch của từng cơ sở. Võ sinh vui lòng trao đổi trực tiếp với huấn luyện viên phụ trách.', coverImage: image('photo-1574680096145-d05b474e2155'), category: 'Thông báo', status: 'published', publishedAt: '2024-10-09' },
];

export const albums: GalleryAlbum[] = [
  { id: 'album-1', createdAt: '2025-01-12', name: 'Tết võ đường 2025', description: 'Khoảnh khắc sum vầy đầu năm.', images: [image('photo-1517832207067-4db24a2ae47c'), image('photo-1518611012118-696072aa579a'), image('photo-1546483875-ad9014c88eba')] },
  { id: 'album-2', createdAt: '2024-12-20', name: 'Giao lưu cuối năm', description: 'Ngày hội của tinh thần đồng đội.', images: [image('photo-1554344728-77cf90d9ed26'), image('photo-1566241440091-ec10de8db2e1'), image('photo-1549060279-7e168fcee0c2')] },
  { id: 'album-3', createdAt: '2024-08-15', name: 'Mùa hè năng lượng', description: 'Những buổi tập đầy nắng và tiếng cười.', images: [image('photo-1599058917212-d750089bc07e'), image('photo-1538805060514-97d9cc17730c'), image('photo-1571019613454-1cb2f99b2d8b')] },
];

export const schedule: ScheduleClass[] = [
  { id: 'class-1', day: 'Thứ 2 · 4 · 6', time: '17:30 – 19:00', level: 'Thiếu nhi cơ bản', branch: 'Tịnh Trì', coach: 'Lê Hoàng Mai' },
  { id: 'class-2', day: 'Thứ 2 · 4 · 6', time: '19:15 – 20:45', level: 'Thiếu niên nâng cao', branch: 'Tịnh Trì', coach: 'Nguyễn Anh Tuấn' },
  { id: 'class-3', day: 'Thứ 3 · 5 · 7', time: '17:30 – 19:00', level: 'Người mới bắt đầu', branch: 'Liêm Tuyền', coach: 'Trần Minh Khôi' },
  { id: 'class-4', day: 'Thứ 3 · 5 · 7', time: '19:15 – 20:45', level: 'Kata & Kumite', branch: 'Thanh Hà', coach: 'Nguyễn Anh Tuấn' },
];

export const tuitionPlans: TuitionPlan[] = [
  { id: 'tuition-1', name: 'Khởi đầu', price: '300.000đ', cycle: '/ tháng', description: 'Dành cho võ sinh mới làm quen với Karate-do.', features: ['3 buổi tập mỗi tuần', 'Miễn phí buổi học thử', 'Tư vấn lộ trình cá nhân'] },
  { id: 'tuition-2', name: 'Bền bỉ', price: '500.000đ', cycle: '/ tháng', description: 'Lựa chọn cân bằng cho hành trình luyện tập đều đặn.', features: ['Không giới hạn buổi tập', 'Được tham gia giao lưu', 'Hỗ trợ thi lên đai'], featured: true },
  { id: 'tuition-3', name: 'Gia đình', price: '800.000đ', cycle: '/ tháng', description: 'Ưu đãi dành cho gia đình có từ hai võ sinh.', features: ['Không giới hạn buổi tập', 'Ưu đãi đồng phục', 'Ưu tiên sự kiện nội bộ'] },
];

export const students: Student[] = [
  { id: 'student-1', createdAt: '2024-08-12', fullName: 'Phạm Gia Huy', dateOfBirth: '2014-05-19', gender: 'male', parentPhone: '0988123456', address: 'Thanh Liêm, Hà Nam', branchId: 'branch-1', currentBelt: 'Đai xanh', enrollmentDate: '2024-08-12', status: 'active' },
  { id: 'student-2', createdAt: '2024-06-03', fullName: 'Nguyễn Minh Anh', dateOfBirth: '2011-11-02', gender: 'female', parentPhone: '0977456789', address: 'Phủ Lý, Hà Nam', branchId: 'branch-2', currentBelt: 'Đai nâu', enrollmentDate: '2024-06-03', status: 'active' },
  { id: 'student-3', createdAt: '2023-09-22', fullName: 'Trần Đức Minh', dateOfBirth: '2009-02-14', gender: 'male', parentPhone: '0966234567', address: 'Thanh Hà, Hà Nam', branchId: 'branch-3', currentBelt: 'Đai đen nhất đẳng', enrollmentDate: '2023-09-22', status: 'active' },
  { id: 'student-4', createdAt: '2024-03-18', fullName: 'Đỗ Hoàng Yến', dateOfBirth: '2015-08-08', gender: 'female', parentPhone: '0912345678', address: 'Liêm Tuyền, Hà Nam', branchId: 'branch-2', currentBelt: 'Đai trắng', enrollmentDate: '2024-03-18', status: 'paused' },
];

export const heroImage = image('photo-1579952363873-27f3bade9f55', 1800);
