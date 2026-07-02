const imgArray = [
    "images_for_tenzi/1.png",
    "images_for_tenzi/2-2.png",
    "images_for_tenzi/2-3.png",
    "images_for_tenzi/2-4.png"
];

const artWorks = [
    // printmaking
    { href: "html_work_link/activerocks.html",         img: "works_images/activerocks1.jpg",              desc: "Active Rocks, 2025",               cat: "printmaking" },
    { href: "html_work_link/sisyphus.html",            img: "works_images/sisyphus1.jpg",                 desc: "Sisyphus' Light Ascent, 2025",     cat: "printmaking" },
    { href: "html_work_link/Gongjungseokcho.html",     img: "works_images/Gongjungseokcho1.jpg",          desc: "공중석초, 2025",                     cat: "printmaking" },
    { href: "html_work_link/orchid.html",              img: "works_images/orchid1.jpg",                   desc: "Orchid Field, 2025",               cat: "printmaking" },
    { href: "html_work_link/ToPrinter.html",            img: "works_images/NATP1.png",                  desc: "To. Printer, 2025",                  cat: "printmaking" },
    { href: "html_work_link/illgwang.html",            img: "works_images/illgwang.png",                  desc: "일광欲, 2023",                      cat: "printmaking" },
    { href: "html_work_link/cant_eat_sunlight.html",   img: "works_images/TV.png",                        desc: "I can't eat sunlight, 2023",       cat: "printmaking" },
    { href: "html_work_link/hyo.html",                 img: "works_images/hitorikurashi1.png",            desc: "孝, 2022",                          cat: "printmaking" },
    { href: "html_work_link/atozuki.html",             img: "works_images/hitorikurashi2.png",            desc: "跡継ぎ, 2022",                       cat: "printmaking" },
    { href: "html_work_link/nan.html",                 img: "works_images/nan.png",                       desc: "Nan, 2022",                         cat: "printmaking" },
    { href: "html_work_link/venus.html",               img: "works_images/Venus.jpg",                     desc: "Venus, 2022",                       cat: "printmaking" },
    { href: "html_work_link/goku1.html",               img: "works_images/goku2.png",                     desc: "獄(1-2), 2022",                     cat: "printmaking" },
    { href: "html_work_link/hyeokgeose_house.html",    img: "works_images/hyeokgeose_house.png",          desc: "Hyeokgeose's house, 2022",          cat: "printmaking" },
    { href: "html_work_link/hyeokgeose1.html",         img: "works_images/hyeokgeose1.png",               desc: "Hyeokgeose(1), 2022",               cat: "printmaking" },
    { href: "html_work_link/hyeokgeose_card1.html",    img: "works_images/Hcard1.png",                    desc: "Hyeokgeose card(1), 2022",          cat: "printmaking" },
    { href: "html_work_link/Ungnyeo(1).html",          img: "works_images/Ungnyeo(1).png",                desc: "Ungnyeo(1), 2022",                  cat: "printmaking" },
    { href: "html_work_link/Ungnyeo_house2.html",      img: "works_images/Ungnyeo_house2.png",            desc: "Ungnyeo's house (front), 2022",     cat: "printmaking" },
    { href: "html_work_link/Ungnyeo_card1.html",       img: "works_images/Ungnyeo_card1.png",             desc: "Ungnyeo card(1), 2022",             cat: "printmaking" },
    { href: "html_work_link/eating_house.html",        img: "works_images/eating_house_challenge.png",    desc: "Eating house challenge, 2022",      cat: "printmaking" },
    { href: "html_work_link/daughter.html",            img: "works_images/daughter1.png",                 desc: "Daughter, 2022",                    cat: "printmaking" },
    { href: "html_work_link/dokkyo1,2.html",           img: "works_images/dokkyo1.png",                   desc: "独居(1,2), 2022",                    cat: "printmaking" },
    { href: "html_work_link/silly_bear1,2,3.html",     img: "works_images/silly_bear1.png",               desc: "Silly Bear(1,2,3), 2022",           cat: "printmaking" },
    { href: "html_work_link/Ungnyeo.html",             img: "works_images/Ungnyeo.png",                   desc: "Ungnyeo, 2022",                     cat: "printmaking" },
    { href: "html_work_link/mung2.html",               img: "works_images/mung2.png",                     desc: "Mung(2), 2022",                     cat: "printmaking" },
    { href: "html_work_link/mung1.html",               img: "works_images/mung1.png",                     desc: "Mung(1), 2022",                     cat: "printmaking" },
    { href: "html_work_link/perfect_daughter.html",    img: "works_images/perfect_daughter.png",          desc: "Perfect daughter, 2021",            cat: "printmaking" },
    { href: "html_work_link/untitled.html",            img: "works_images/untitled.png",                  desc: "Untitled, 2021",                    cat: "printmaking" },
    { href: "html_work_link/xxapato.html",             img: "works_images/xxapato.jpeg",                  desc: "xxアパート, 2021",                    cat: "printmaking" },
    // artist book
    { href: "html_work_link/ultra.html",              img: "works_images/ultra1.jpg",                    desc: "초미세 돌덩이, 2025",                  cat: "artist book" },
    { href: "html_work_link/seongsil.html",           img: "works_images/seongsil1.jpg",                 desc: "성실한 스코어 성실한 인덱스, 2025",    cat: "artist book" },
    { href: "html_work_link/muscle.html",             img: "works_images/muscle1.png",                   desc: "Creative muscle Exercise guide, 2024", cat: "artist book" },
    { href: "html_work_link/law.html",                img: "works_images/law0.jpg",                      desc: "Within the law, 2023",                 cat: "artist book" },
    { href: "html_work_link/weed.html",               img: "works_images/weed1.png",                     desc: "A normal weed guide, 2023",            cat: "artist book" },
    // painting
    { href: "html_work_link/independent_point.html",   img: "works_images/independent_point.jpeg",        desc: "An independent point Series, 2023",   cat: "painting" },
    { href: "html_work_link/kafka.html",               img: "works_images/kafka1.jpg",                    desc: "Untitled, 2023",                       cat: "painting" },
    { href: "html_work_link/mung3.html",               img: "works_images/mung3.jpg",                     desc: "Mung(3), 2022",                        cat: "painting" },
    { href: "html_work_link/drawing0.html",            img: "works_images/drawing0.JPEG",                 desc: "Drawing(0), 2022",                     cat: "painting" },
    { href: "html_work_link/Odds and Ends8.html",      img: "works_images/odds8.jpeg",                    desc: "Odds and Ends Series, 2021",           cat: "painting" },
    // media-art
    { href: "html_work_link/exemplary_posture.html",   img: "works_images/exemplary_posture1.jpg",        desc: "An Exemplary Posture for Moving Stones, 2025",                     cat: "media-art" },
    { href: "html_work_link/push_lightly.html",        img: "works_images/push_lightly1.jpg",             desc: "Push Lightly, 2025",                                               cat: "media-art" },
    { href: "html_work_link/drunker2.html",            img: "works_images/coex_drunker1.jpg",             desc: "Drunker, ich muss dich lassen (COEX), 2025",                       cat: "media-art" },
    { href: "html_work_link/drunker1.html",            img: "works_images/drunker3.jpeg",                 desc: "Drunker, ich muss dich lassen (Gallery 17717), 2025",              cat: "media-art" },
    { href: "html_work_link/game_for_studying_in_japan.html", img: "works_images/exchange1.png",          desc: "Game for studying in Japan, 2024",                                 cat: "media-art" },
    { href: "html_work_link/shinji and sword.html",    img: "works_images/shinji1.png",                   desc: "A conversation between Shinji and the sword, 2023",                cat: "media-art" },
    { href: "html_work_link/ayy_gretel.html",          img: "works_images/ayy_gretel1.JPG",               desc: "Ayy! Gretel!, 2022",                                               cat: "media-art" },
    // etc
    { href: "html_work_link/gyeonggi.html",            img: "works_images/gyeonggi1.jpg",                 desc: "'Master Class 60h' Flat Form Program — Gyeonggi School Arts Creation Studio",                            cat: "etc" },
];

const designWorks = [
    // book
    { href: "html_work_link/hongik_book.html", img: "works_images/thesparekey_book1.png",   desc: "Exhibition Book Design for Hongik Univ. Graduation Exhibition 《THE SPARE KEY》, 2025",  cat: "book" },
    { href: "html_work_link/ultra.html",       img: "works_images/ultra1.jpg",        desc: "초미세 돌덩이, 2025",                                                    cat: "book" },
    { href: "html_work_link/seongsil.html",    img: "works_images/seongsil1.jpg",     desc: "성실한 스코어 성실한 인덱스, 2025",                                     cat: "book" },
    { href: "html_work_link/vikki_book.html", img: "works_images/viiki1.png",         desc: "Archiving Book Design for Vikki, Hongik University 2025 Winter International Volunteer Corps", cat: "book" },
    { href: "html_work_link/NoAccess.html",    img: "works_images/NoAccess0-1.jpg",   desc: "No Access to Printer, 2025",                                            cat: "book" },
    { href: "html_work_link/ZURY.html",        img: "works_images/ZURY1.png",         desc: "ズURY, 2024",                                                           cat: "book" },
    { href: "html_work_link/tsukuba.html",     img: "works_images/TSUKUBA3.jpg",      desc: "TSUKUBA!, 2024",                                                        cat: "book" },
    { href: "html_work_link/muscle.html",      img: "works_images/muscle1.png",       desc: "Creative muscle Exercise guide, 2024",                                  cat: "book" },
    { href: "html_work_link/law.html",         img: "works_images/law0.jpg",          desc: "Within the law, 2023",                                                  cat: "book" },
    { href: "html_work_link/weed.html",        img: "works_images/weed1.png",         desc: "A normal weed guide, 2023",                                             cat: "book" },
    // poster design
    { href: "html_work_link/bef.html",    img: "works_images/../works_images/bef_poster1.gif",        desc: "Poster Design for 《겉보기엔 조금 긴 이동》 in BeF, 2026",     cat: "poster design" },
    { href: "html_work_link/leejiwon.html",    img: "works_images/leejiwon_motion_poster.gif",        desc: "Poster Design for Lee Jiwon's Solo Exhibition 《Luminous Void, Moments of Fulfillment》, 2026",     cat: "poster design" },
    { href: "html_work_link/hureru.html",    img: "works_images/hureru.gif",        desc: "Exhibition Design for Joshibi Univ. Group Exhibition 《ふれる》, 2025",                                  cat: "poster design" },
    // identity design
    { href: "html_work_link/vikki.html", img: "works_images/vikki1.png", desc: "Logo Design for Vikki, Hongik University 2025 Winter International Volunteer Corps",                                               cat: "identity design" },
    { href: "html_work_link/yellow_punch.html", img: "works_images/rocket_punch1.JPG", desc: "Rocket Punch 4th mini album [Yellow punch] cover, 2022",                                               cat: "identity design" },
    // exhibition design
    { href: "html_work_link/luminous.html",    img: "works_images/luminous1.png",        desc: "Exhibition Design for Lee Jiwon's Solo Exhibition 《Luminous Void, Moments of Fulfillment》, 2026",     cat: "exhibition design" },
    { href: "html_work_link/hongik.html",      img: "works_images/thesparekey0.png",  desc: "Exhibition Design for Hongik Univ. Graduation Exhibition 《THE SPARE KEY》, 2025",                      cat: "exhibition design" },
    // etc
    { href: "html_work_link/web_choijiwoo.html", img: "works_images/web_jiwoochoi.gif",            desc: "Web Design for Jiwoo Choi, 2026",                                                                        cat: "etc" },
];

const textWorks = [
    // 2026
    { href: "html_text_link/to_24yo_misuk.html",       year: "2026", title: "24살의 미숙이에게",                                          excerpt: "내년이면, 엄마가 언니를 낳은, 엄마가 엄마가 된 나이" },
    { href: "html_text_link/tomato_to_die.html",        year: "2026", title: "죽을 토마토",                                               excerpt: "" },
    // 2025
    { href: "html_text_link/house.html",                year: "2025", title: "집",                                                        excerpt: "집 만들기 레고세트를 샀는데," },
    { href: "html_text_link/blind_with_eyes_open.html", year: "2025", title: "눈뜬 장님",                                                 excerpt: "책장에 쌓인 그것들" },
    // 2024
    { href: "html_text_link/to_buddha.html",            year: "2024", title: "받는 이, 佛様",                                             excerpt: "2024年4月10日水曜日" },
    { href: "html_text_link/her_slip_of_tongue.html",   year: "2024", title: "그녀들의 말실수",                                           excerpt: "" },
    { href: "html_text_link/orange_juice.html",         year: "2024", title: "오렌지주스",                                                excerpt: "올해 세번째 감기를 얻어내며 건강의 중요성에 뼈저리게 알게된." },
    { href: "html_text_link/to_my_future_child.html",   year: "2024", title: "미래의 2세에게",                                            excerpt: "안녕 이제부터 널 이세라고 부를게" },
    { href: "html_text_link/thumb.html",                year: "2024", title: "엄지손가락",                                                excerpt: "엄마들은 항상 어루만지는거같아" },
    // 2023
    { href: "html_text_link/black_haired_beasts.html",  year: "2023", title: "검은 머리 짐승들",                                          excerpt: "부모 밑에 숨은 검은 머리 짐승들, 그들은 모순적이게도 매일같이 독립을 꿈꾼다." },
    { href: "html_text_link/independence_point.html",   year: "2023", title: "독립점",                                                    excerpt: "우리는 살면서 마주하는 물음표들을 모두 분해, 나열, 재구성하고 결국 독립을 해낸다." },
    { href: "html_text_link/short_writings.html",       year: "2023", title: "짧은 글들",                                                 excerpt: "" },
    { href: "html_text_link/normal_family.html",        year: "2023", title: "정상가족",                                                  excerpt: "[ 정상가족 이데올로기 ]" },
    { href: "html_text_link/homeless_passing.html",     year: "2023", title: "노숙자가 지나갈 때",                                        excerpt: "내가 냄새에 예민한 사람인 줄 알았다." },
    { href: "html_text_link/sunlight_allergy.html",     year: "2023", title: "저는 햇빛을 먹지 못합니다.",                                excerpt: "학창시절, 알레르기 증상에 대해 묻는 가정통신문이 있었는데-" },
    { href: "html_text_link/step_on_kafka.html",        year: "2023", title: "카프카를 밟아주세요.",                                      excerpt: "등교 길, 뒤집힌 카프카를 보았다." },
    { href: "html_text_link/hedgehog_dilemma.html",     year: "2023", title: "고슴도치 법칙",                                             excerpt: "고슴도치 딜레마에 대하여" },
    { href: "html_text_link/variable_invariable.html",  year: "2023", title: "가변은 불가변",                                             excerpt: "불가변하지 않은 것이 있을까?" },
    { href: "html_text_link/iljido.html",               year: "2023", title: "일知도",                                                    excerpt: "동시대 미술은 '권력의 다원화'일지도." },
    { href: "html_text_link/tomoya.html",               year: "2023", title: "朋哉",                                                      excerpt: "" },
    { href: "html_text_link/oh_george_senpai.html",     year: "2023", title: "아 조지 선배!",                                            excerpt: "" },
    // 2022
    { href: "html_text_link/walking_into_minjae.html",  year: "2022", title: "걸어서 민재속으로_(그녀의 잠꼬대)",                          excerpt: "" },
];

function showImage() {
    const imgNum = Math.floor(Math.random() * imgArray.length);
    document.getElementById("introImg").src = imgArray[imgNum];
    renderLetters();
}

function renderLetters() {
    const mobile = window.innerWidth < 768;
    const letters = ['a', 'h', 'y', 'u', 'n'];
    const overlay = document.getElementById('letterOverlay');
    overlay.innerHTML = '';

    const positions = mobile
        ? [{ x: 12, y: 50 }, { x: 30, y: 50 }, { x: 50, y: 50 }, { x: 70, y: 50 }, { x: 88, y: 50 }]
        : [{ x: 35, y: 50 }, { x: 43, y: 50 }, { x: 51, y: 50 }, { x: 59, y: 50 }, { x: 67, y: 50 }];

    const widths = mobile
        ? ['12vw', '11vw', '10vw', '13vw', '12vw']
        : ['6rem', '5.4rem', '5rem', '6.2rem', '5.8rem'];

    const heights = mobile
        ? ['19vw', '17vw', '20vw', '16vw', '19vw']
        : ['8rem', '7.5rem', '8.5rem', '7rem', '8rem'];

    const borderRadiuses = [
        '40% 45% 55% 60% / 50% 45% 55% 50%',
        '35% 50% 55% 60% / 55% 45% 55% 45%',
        '45% 40% 60% 55% / 50% 55% 45% 50%',
        '40% 50% 50% 60% / 55% 50% 45% 50%',
        '45% 50% 55% 50% / 50% 55% 45% 50%'
    ];
    const rotations = ['0deg', '-10deg', '6deg', '0deg', '8deg'];

    overlay.classList.remove('hoverAll');

    if (!overlay.dataset.hoverHandler) {
        overlay.addEventListener('mouseenter', function(event) {
            if (event.target.tagName === 'SPAN') overlay.classList.add('hoverAll');
        }, true);
        overlay.addEventListener('mouseleave', function() {
            overlay.classList.remove('hoverAll');
        }, true);
        overlay.dataset.hoverHandler = '1';
    }

    for (let i = 0; i < letters.length; i++) {
        const span = document.createElement('span');
        const pos = positions[i];

        span.textContent = letters[i];
        span.style.fontSize = mobile ? '10px' : '14px';
        span.style.left = pos.x + 'vw';
        span.style.top = pos.y + 'vh';
        span.style.transform = `translate(-50%, -50%) rotate(${rotations[i]})`;
        span.style.opacity = 1;
        span.style.borderRadius = borderRadiuses[i];
        span.style.width = widths[i];
        span.style.height = heights[i];
        span.style.lineHeight = 'normal';
        span.style.padding = '0';
        span.style.margin = '0';
        span.style.boxSizing = 'border-box';
        span.style.border = '1px solid #333';
        span.style.display = 'flex';
        span.style.justifyContent = 'center';
        span.style.alignItems = 'center';
        span.style.textAlign = 'center';
        span.style.fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";
        span.style.backgroundColor = 'white';
        span.style.color = 'black';

        span.addEventListener('click', showTopMenu);
        overlay.appendChild(span);
    }
}

// 화면 회전 / 리사이즈 시 circles 재렌더 + 갤러리 패딩 재계산
let _resizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(function () {
        renderLetters();
        updateGalleryPadding();
    }, 150);
});

function showTopMenu() {
    const topMenu = document.getElementById('topMenuBar');
    const overlay = document.getElementById('letterOverlay');
    const img = document.getElementById('introImg');

    img.src = img.getAttribute('src').replace(/\.(png|jpg)$/, '_.jpg');
    topMenu.classList.add('visible');
    overlay.style.display = 'none';
}

// 갤러리를 닫고 메뉴 상태(글자 클릭 직후)로 돌아가기
function resetToMenuState() {
    ['artGallery', 'designGallery', 'textGallery'].forEach(id => {
        document.getElementById(id).classList.remove('visible');
    });
    document.querySelectorAll('.menuSection .subitemGroup').forEach(el => {
        el.classList.remove('collapsed');
    });
    closeAllSubmenus();
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.getElementById('topMenuBar').classList.remove('gallery-open');
}

function hideAllGalleriesAndSubmenus() {
    ['artGallery', 'designGallery', 'textGallery', 'contactGallery'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('visible');
    });
    document.querySelectorAll('.menuSection .subitemGroup').forEach(el => {
        el.classList.add('collapsed');
    });
    closeAllSubmenus();
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.getElementById('topMenuBar').classList.remove('gallery-open');
}

// 갤러리 padding-top을 메뉴 높이에 즉시 맞춤 (transition 없이)
// collapsed 상태의 subitemGroup은 CSS transition이 아직 시작 안 된 상태여서
// offsetHeight가 부풀려질 수 있으므로, 인라인 max-height:0으로 고정 후 측정한다
function updateGalleryPadding() {
    const menu = document.getElementById('topMenuBar');
    if (!menu.classList.contains('visible')) return;
    const groups = menu.querySelectorAll('.subitemGroup.collapsed');
    groups.forEach(function(g) { g.style.transition = 'none'; g.style.maxHeight = '0'; });
    const h = menu.offsetHeight;
    groups.forEach(function(g) { g.style.transition = ''; g.style.maxHeight = ''; });
    ['artGallery', 'designGallery', 'textGallery', 'contactGallery'].forEach(function(id) {
        const g = document.getElementById(id);
        if (g) { g.style.transition = 'none'; g.style.paddingTop = h + 'px'; }
    });
}

const GALLERY_IDS = ['artGallery', 'designGallery', 'textGallery', 'contactGallery'];

// 모바일 서브메뉴 토글 + 갤러리 padding-top 실시간 동기화
// CSS transition 진행 중 offsetHeight는 현재 애니메이션 중간값을 반환하므로
// RAF로 매 프레임 측정해 갤러리를 서브메뉴와 함께 움직인다
function syncSubmenuToggle(sectionId) {
    const menu = document.getElementById('topMenuBar');
    const submenu = document.querySelector('#' + sectionId + ' .subitemGroup');
    if (!submenu) return;
    submenu.classList.toggle('collapsed');
    const start = Date.now();
    function step() {
        const h = menu.offsetHeight;
        GALLERY_IDS.forEach(function(id) {
            const g = document.getElementById(id);
            if (g) { g.style.transition = 'none'; g.style.paddingTop = h + 'px'; }
        });
        if (Date.now() - start < 450) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// 갤러리가 열릴 때 body 스크롤 차단 (iOS fixed 버그 방지)
function lockBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.getElementById('topMenuBar').classList.add('gallery-open');
}

// --- Art gallery ---
function showArtGallery() {
    const gallery = document.getElementById('artGallery');
    if (gallery.classList.contains('visible')) {
        if (window.innerWidth <= 768) {
            syncSubmenuToggle('artSection');
        } else {
            gallery.scrollTop = 0;
        }
        return;
    }
    hideAllGalleriesAndSubmenus();
    if (!gallery.dataset.populated) {
        populateImageGallery('artGallery', artWorks, ['printmaking', 'artist book', 'painting', 'media-art', 'etc']);
        gallery.dataset.populated = '1';
    }
    gallery.scrollTop = 0;
    gallery.classList.add('visible');
    lockBodyScroll();
    updateGalleryPadding();
}

// --- Design gallery ---
function showDesignGallery() {
    const gallery = document.getElementById('designGallery');
    if (gallery.classList.contains('visible')) {
        if (window.innerWidth <= 768) {
            syncSubmenuToggle('designSection');
        } else {
            gallery.scrollTop = 0;
        }
        return;
    }
    hideAllGalleriesAndSubmenus();
    if (!gallery.dataset.populated) {
        populateImageGallery('designGallery', designWorks, ['book', 'poster design', 'identity design', 'exhibition design', 'etc']);
        gallery.dataset.populated = '1';
    }
    gallery.scrollTop = 0;
    gallery.classList.add('visible');
    lockBodyScroll();
    updateGalleryPadding();
}

// --- Text gallery ---
function showTextGallery() {
    const gallery = document.getElementById('textGallery');
    if (gallery.classList.contains('visible')) {
        gallery.scrollTop = 0;
        return;
    }
    hideAllGalleriesAndSubmenus();
    if (!gallery.dataset.populated) {
        populateTextGallery();
        gallery.dataset.populated = '1';
    }
    gallery.scrollTop = 0;
    gallery.classList.add('visible');
    lockBodyScroll();
    updateGalleryPadding();
}

// 이미지 갤러리 공통 생성 함수 (art, design 공용)
function populateImageGallery(galleryId, works, categoryOrder) {
    const gallery = document.getElementById(galleryId);
    let html = '<div class="galleryGrid">';

    categoryOrder.forEach((catId, i) => {
        const items = works.filter(w => w.cat === catId);
        if (!items.length) return;
        const borderStyle = i === 0 ? ' style="border-top:none;padding-top:0;margin-top:0"' : '';
        html += `<div class="galleryCategoryRow"${borderStyle}>${catId}</div>`;
        items.forEach(w => {
            html += `<a class="galleryThumb" href="${w.href}">
                <img src="${w.img}" alt="" loading="lazy">
                <span class="galleryCaption">${w.desc}</span>
            </a>`;
        });
    });

    html += '</div><div class="gallery-copyright">© Jeon Ahyun</div>';
    gallery.innerHTML = html;
}

// 텍스트 갤러리 생성
function populateTextGallery() {
    const gallery = document.getElementById('textGallery');
    const years = ['2026', '2025', '2024', '2023', '2022'];
    let html = '<div class="textList">';

    years.forEach((yr, i) => {
        const items = textWorks.filter(w => w.year === yr);
        if (!items.length) return;
        const borderStyle = i === 0 ? ' style="border-top:none;padding-top:0;margin-top:0"' : '';
        html += `<div class="galleryCategoryRow"${borderStyle}>${yr}</div>`;
        items.forEach(w => {
            html += `<a class="textListItem" href="${w.href}">• ${w.title}</a>`;
        });
    });

    html += '</div><div class="gallery-copyright">© Jeon Ahyun</div>';
    gallery.innerHTML = html;
}

function toggleContactInfo() {
    const gallery = document.getElementById('contactGallery');
    if (gallery.classList.contains('visible')) {
        hideAllGalleriesAndSubmenus();
        return;
    }
    hideAllGalleriesAndSubmenus();
    if (!gallery.dataset.populated) {
        const src = document.getElementById('contactInfo');
        gallery.innerHTML = '<div class="contactGalleryContent">' + src.innerHTML + '</div>';
        gallery.dataset.populated = '1';
    }
    gallery.scrollTop = 0;
    gallery.classList.add('visible');
    lockBodyScroll();
    updateGalleryPadding();
}

function closeAllSubmenus() {
    document.querySelectorAll('.yearList, .subList, #printmakingList').forEach(l => l.classList.remove('open'));
    document.querySelectorAll('.clickableSubitem').forEach(b => b.classList.remove('active'));
}

function toggleList(id, btn) {
    const target = document.getElementById(id);
    if (!target) return;
    const isOpen = target.classList.contains('open');
    closeAllSubmenus();
    if (!isOpen) {
        target.classList.add('open');
        btn.classList.add('active');
    }
}
