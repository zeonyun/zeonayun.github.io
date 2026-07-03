let current_page = 0;
let leftX, rightX, lineHeight;

function setupButtons() {
    document.getElementById('prevButton').addEventListener('click', function() {
        if (current_page > 0) { // 페이지가 0보다 클 때만 감소
            current_page--;
            console.log('current_page (prev):', current_page);
            updatePage();
        }
    });
    
    document.getElementById('nextButton').addEventListener('click', function() {
        if (current_page < 3) { // 페이지가 3보다 작을 때만 증가
            current_page++;
            console.log('current_page (next):', current_page);
            updatePage();
        }
    });
}
 
    function updatePage() {
        redraw(); // 페이지 전환 시 캔버스 다시 그리기
        updateLinkVisibility(); // 링크 표시 상태 업데이트
    }

    function updateLinkVisibility() {
        let pageOneLinks = document.querySelectorAll('a[id^="pageOneLink"]');
        let pageTwoLinks = document.querySelectorAll('a[id^="pageTwoLink"]');
        let pageThreeLinks = document.querySelectorAll('a[id^="pageThreeLink"]');
        let pageFourLinks = document.querySelectorAll('a[id^="pageFourLink"]');

        
        pageOneLinks.forEach(link => {
            link.style.display = (current_page === 0) ? 'block' : 'none';
        });
        pageTwoLinks.forEach(link => {
            link.style.display = (current_page === 1) ? 'block' : 'none';
        });
        pageThreeLinks.forEach(link => {
            link.style.display = (current_page === 2) ? 'block' : 'none';
        });
        pageFourLinks.forEach(link => {
            link.style.display = (current_page === 3) ? 'block' : 'none';
        });
    }

    function updateButtonPositions() {
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
    
        if (window.innerWidth < 768) { // 모바일 화면에서
            prevButton.style.left = '1cm'; // 왼쪽에 1cm
            nextButton.style.right = '1cm'; // 오른쪽에 1cm
        } else {
            prevButton.style.left = '2cm'; // 데스크탑 화면에서
            nextButton.style.right = '2cm'; // 데스크탑 화면에서
        }
    }

    window.addEventListener('resize', updateButtonPositions);
    

    function createOrUpdateLink(id, href, text, x, y) {
    // 이미 하이퍼링크가 있는지 확인
    let linkElement = document.getElementById(id);
    if (!linkElement) {
        // 링크가 없으면 새로 생성
        linkElement = document.createElement('a');
        linkElement.id = id;  // 링크에 고유 ID 부여
        linkElement.href = href;  // 하이퍼링크 URL
        linkElement.textContent = text;  // 링크 글자
        linkElement.style.position = 'absolute';
        linkElement.style.color = text === 'A' ? 'white' : 'blue';  
        linkElement.style.fontSize = '25px';  // 글자 크기
        // 링크를 body에 추가
        document.body.appendChild(linkElement);
    }
    if (window.innerWidth < 768) {
        // 모바일에서 위치 조정: y 좌표를 약간 위로 이동
        linkElement.style.left = `${x}px`;
        linkElement.style.top = `${y - 10}px`;
    } else {
        linkElement.style.left = `${x}px`;
        linkElement.style.top = `${y}px`;
    }
    linkElement.style.display = (current_page === 0) ? 'block' : 'none';
    }

    function createOrUpdateImageLink(linkId, href, src, x, y, w, h) {
        let linkElement = document.getElementById(linkId);
        if (!linkElement) {
            // 링크 요소가 없으면 새로 생성
            linkElement = document.createElement('a');
            linkElement.id = linkId;
            linkElement.href = href;
            linkElement.target = '_blank'; // 새 창에서 열리도록 설정
            linkElement.style.position = 'absolute';
            document.body.appendChild(linkElement);
    
            // 이미지 생성하여 링크에 추가
            let imageElement = document.createElement('img');
            imageElement.src = src;
            imageElement.style.width = `${w}px`;
            imageElement.style.height = `${h}px`;
            linkElement.appendChild(imageElement);
        }
    }
 
 function setup() {
        createCanvas(windowWidth, windowHeight);
        leftX = 0;
        rightX = width;
        lineHeight = height / 2;
        noLoop();
        setupButtons();
        updateButtonPositions();
        updateLinkVisibility(); 
    }

    function draw() {
        background(0);  // 흰 배경
        frame();
        if (current_page === 0) {
          page_one();
        } else if (current_page === 1) {
          page_two();
        } else if (current_page === 2) {
          page_three();
        } else if (current_page === 3) {
          page_four();
        }
    }
        

    function page_one() {
        // 모바일과 데스크탑에서 상자 크기 조절
        let rectSize;
        if (window.innerWidth < 768) {
            rectSize = min(width, height) * 0.16; // 모바일: 흰 상자 크기를 줄이기 (조금 더 큼)
        } else {
            rectSize = min(width, height) * 0.075; // 데스크탑: 흰 상자 크기 설정
        }


        // 페이지 1 하이퍼링크 생성 및 위치 지정
        createOrUpdateLink('pageOneLink0', 'https://webofcogito2.neocities.org/html_work_link/illgwang', 'A', width / 2 - 10, height / 14 );
        createOrUpdateLink('pageOneLink1', 'https://webofcogito2.neocities.org/html_work_link/illgwang9', 'A9', width / 2 - 16, height / 5 - 16);
        createOrUpdateLink('pageOneLink2', 'https://webofcogito2.neocities.org/html_work_link/illgwang8', 'A8', width / 2 - 16, height / 3.5 - 16);
        createOrUpdateLink('pageOneLink3', 'https://webofcogito2.neocities.org/html_work_link/illgwang7', 'A7', width / 2 - 16, height / 2.69 - 16);

        // 사다리꼴에 대한 하이퍼링크도 추가
        createOrUpdateLink('pageOneLink4', 'https://webofcogito2.neocities.org/html_work_link/illgwang6', 'A6', width / 2 - 16, height / 2.18 - 16);
        createOrUpdateLink('pageOneLink5', 'https://webofcogito2.neocities.org/html_work_link/illgwang5', 'A5', width / 2 - 16, height / 2.13 + 42);
        createOrUpdateLink('pageOneLink6', 'https://webofcogito2.neocities.org/html_work_link/illgwang4', 'A4', width / 2 - 16, height / 2.13 + 100);
        createOrUpdateLink('pageOneLink7', 'https://webofcogito2.neocities.org/html_work_link/illgwang3', 'A3', width / 2 - 16, height / 2.13 + 158);
        createOrUpdateLink('pageOneLink8', 'https://webofcogito2.neocities.org/html_work_link/illgwang2', 'A2', width / 2 - 16, height / 2.13 + 227);
        createOrUpdateLink('pageOneLink9', 'https://webofcogito2.neocities.org/html_work_link/illgwang1', 'A1', width / 2 - 16, height / 2.13 + 310);

        // 행거 가로선
        stroke(255);  // 검정색 선
        strokeWeight(5);  // 선의 두께
        strokeCap(SQUARE);
        let hangerY = height / 7;  // 화면 중앙의 Y 좌표
        line(leftX + 160, hangerY, rightX - 160, hangerY);  // 가로줄 (화면 전체 너비)

        //행거 세로선들
        line(leftX + 160, hangerY, leftX + 160, lineHeight * 1.03);
        line(rightX - 160, hangerY, rightX - 160, lineHeight * 1.03);
        

        stroke(255);  // 검정색 선
        strokeWeight(3);  // 선의 두께
        strokeCap(SQUARE);
        // 화면 크기에 따라 크기가 변하는 rect

        // 이미 하이퍼링크가 있는지 확인
        if (!document.getElementById('pageOneLink')) {
        // HTML 하이퍼링크 요소 생성
        const linkElement = document.createElement('a');
        linkElement.id = 'pageOneLink';  // 링크에 ID 부여
        linkElement.style.position = 'absolute';
        linkElement.style.left = `${width / 2 - 16}px`;  // x 좌표
        linkElement.style.top = `${height / 5 - 16}px`;  // y 좌표
        linkElement.style.color = 'blue';  // 글자 색상
        linkElement.style.fontSize = '25px';  // 글자 크기


        // 특정 링크의 글자색을 다르게 설정
        if (text === 'A') {
            linkElement.style.color = 'white';  // 'A' 링크는 흰색
        } else {
            linkElement.style.color = 'blue';  // 나머지 링크는 파란색
        }
        

        // 링크를 body에 추가
        document.body.appendChild(linkElement);
    

        } else {
            // 링크 위치 업데이트 (화면 크기 변경 시에도 위치가 변경됨)
            const linkElement = document.getElementById('pageOneLink');
            linkElement.style.left = `${width / 2 - 50}px`;  // x 좌표 업데이트
            linkElement.style.top = `${height / 5 - 10}px`;  // y 좌표 업데이트
        }
        
        // 가운데 위치한 사각형 그리기
        rectMode(CENTER);  // 중심 기준으로 사각형 그리기
        noStroke ();
        fill(255);
        rect(width / 2, height / 5, rectSize, rectSize);  // 중앙에 사각형
        
        rect(width / 2, height / 3.5, rectSize, rectSize);
        rect(width / 2, height / 2.69, rectSize, rectSize);
        rect(width / 2, height / 2.18, rectSize, rectSize);
        //행거 사각형
        rect(leftX+160, hangerY,20,15);
        rect(rightX-160, hangerY,20,15);

        // 첫 번째 사다리꼴 그리기
        let trapezoidTopWidth = rectSize;
        let trapezoidBottomWidth = rectSize * 1.5;
        let trapezoidHeight = rectSize * 0.8;
    
        let trapezoidX = width / 2;
        let trapezoidY = height / 2.13 + rectSize / 2;
    
        beginShape();
        vertex(trapezoidX - trapezoidTopWidth / 2, trapezoidY);  // 상단 왼쪽
        vertex(trapezoidX + trapezoidTopWidth / 2, trapezoidY);  // 상단 오른쪽
        vertex(trapezoidX + trapezoidBottomWidth / 2.3, trapezoidY + trapezoidHeight);  // 하단 오른쪽
        vertex(trapezoidX - trapezoidBottomWidth / 2.3, trapezoidY + trapezoidHeight);  // 하단 왼쪽
        endShape(CLOSE);
    
        // 두 번째 사다리꼴 그리기 (첫 번째 사다리꼴 아래)
        let secondTrapezoidTopWidth = trapezoidBottomWidth;  // 첫 번째 사다리꼴 하단 너비와 동일
        let secondTrapezoidBottomWidth = trapezoidBottomWidth * 1.2;  // 두 번째 사다리꼴 하단 너비는 조금 더 넓게
        let secondTrapezoidHeight = trapezoidHeight * 0.95;  // 높이는 동일
    
        let secondTrapezoidY = trapezoidY + trapezoidHeight * 1.16;  // 두 번째 사다리꼴 상단의 Y 좌표 (첫 번째 사다리꼴 아래)
    
        beginShape();
        vertex(trapezoidX - secondTrapezoidTopWidth / 2.25, secondTrapezoidY);  // 상단 왼쪽
        vertex(trapezoidX + secondTrapezoidTopWidth / 2.25, secondTrapezoidY);  // 상단 오른쪽
        vertex(trapezoidX + secondTrapezoidBottomWidth / 1.70, secondTrapezoidY + secondTrapezoidHeight);  // 하단 오른쪽
        vertex(trapezoidX - secondTrapezoidBottomWidth / 1.70, secondTrapezoidY + secondTrapezoidHeight);  // 하단 왼쪽
        endShape(CLOSE);

        // 세 번째 사다리꼴 그리기 (첫 번째 사다리꼴 아래)
        let thirdTrapezoidTopWidth = trapezoidBottomWidth;  // 첫 번째 사다리꼴 하단 너비와 동일
        let thirdTrapezoidBottomWidth = trapezoidBottomWidth * 1.2;  // 두 번째 사다리꼴 하단 너비는 조금 더 넓게
        let thirdTrapezoidHeight = trapezoidHeight * 1.05;  // 높이는 동일
    
        let thirdTrapezoidY = trapezoidY + trapezoidHeight * 2.25;  // 두 번째 사다리꼴 상단의 Y 좌표 (첫 번째 사다리꼴 아래)
    
        beginShape();
        vertex(trapezoidX - thirdTrapezoidTopWidth / 1.35, thirdTrapezoidY);  // 상단 왼쪽
        vertex(trapezoidX + thirdTrapezoidTopWidth / 1.35, thirdTrapezoidY);  // 상단 오른쪽
        vertex(trapezoidX + thirdTrapezoidBottomWidth / 1.15, thirdTrapezoidY + thirdTrapezoidHeight);  // 하단 오른쪽
        vertex(trapezoidX - thirdTrapezoidBottomWidth / 1.15, thirdTrapezoidY + thirdTrapezoidHeight);  // 하단 왼쪽
        endShape(CLOSE);

        // 네 번째 사다리꼴 그리기 (첫 번째 사다리꼴 아래)
        let forthTrapezoidTopWidth = trapezoidBottomWidth;  // 첫 번째 사다리꼴 하단 너비와 동일
        let forthTrapezoidBottomWidth = trapezoidBottomWidth * 1.2;  // 두 번째 사다리꼴 하단 너비는 조금 더 넓게
        let forthTrapezoidHeight = trapezoidHeight * 1.25;  // 높이는 동일
        let forthTrapezoidY = trapezoidY + trapezoidHeight * 3.50;  // 두 번째 사다리꼴 상단의 Y 좌표 (첫 번째 사다리꼴 아래)
    
        beginShape();
        vertex(trapezoidX - forthTrapezoidTopWidth / 0.92, forthTrapezoidY);  // 상단 왼쪽
        vertex(trapezoidX + forthTrapezoidTopWidth / 0.92, forthTrapezoidY);  // 상단 오른쪽
        vertex(trapezoidX + forthTrapezoidBottomWidth / 0.82, forthTrapezoidY + forthTrapezoidHeight);  // 하단 오른쪽
        vertex(trapezoidX - forthTrapezoidBottomWidth / 0.82, forthTrapezoidY + forthTrapezoidHeight);  // 하단 왼쪽
        endShape(CLOSE);

        // 다섯 번째 사다리꼴 그리기 (첫 번째 사다리꼴 아래)
        let fifthTrapezoidTopWidth = trapezoidBottomWidth;  // 첫 번째 사다리꼴 하단 너비와 동일
        let fifthTrapezoidBottomWidth = trapezoidBottomWidth * 1.2;  // 두 번째 사다리꼴 하단 너비는 조금 더 넓게
        let fifthTrapezoidHeight = trapezoidHeight * 1.55;  // 높이는 동일
    
        let fifthTrapezoidY = trapezoidY + trapezoidHeight * 5;  // 두 번째 사다리꼴 상단의 Y 좌표 (첫 번째 사다리꼴 아래)
    
        beginShape();
        vertex(trapezoidX - fifthTrapezoidTopWidth / 0.65, fifthTrapezoidY);  // 상단 왼쪽
        vertex(trapezoidX + fifthTrapezoidTopWidth / 0.65, fifthTrapezoidY);  // 상단 오른쪽
        vertex(trapezoidX + fifthTrapezoidBottomWidth / 0.6, fifthTrapezoidY + fifthTrapezoidHeight);  // 하단 오른쪽
        vertex(trapezoidX - fifthTrapezoidBottomWidth / 0.6, fifthTrapezoidY + fifthTrapezoidHeight);  // 하단 왼쪽
        endShape(CLOSE);

        }

        function page_two() {
            // 페이지 2 그리기
            textSize(32);
            textAlign(CENTER, CENTER);
            noStroke ();
            fill(255);

                   // 모바일과 데스크탑에서 상자 크기 조절
        let rectSize;
        if (window.innerWidth < 768) {
            rectSize = min(width, height) * 0.2; // 모바일: 흰 상자 크기를 줄이기 (조금 더 큼)
        } else {
            rectSize = min(width, height) * 0.075; // 데스크탑: 흰 상자 크기 설정
        }


        // 페이지 1 하이퍼링크 생성 및 위치 지정
        createOrUpdateLink('pageTwoLink0', 'https://webofcogito2.neocities.org/html_work_link/hikkoshi', 'B', width / 2.795, height / 4-17);
        createOrUpdateLink('pageTwoLink1', 'https://webofcogito2.neocities.org/html_work_link/muscle', 'C', width / 2-9, height / 4-17);
        createOrUpdateLink('pageTwoLink2', 'https://webofcogito2.neocities.org/html_work_link/law', 'D', width / 1.595, height / 4-17);

        updateLinkVisibility();

        stroke(255);  // 검정색 선
        strokeWeight(3);  // 선의 두께
        strokeCap(SQUARE);
        // 화면 크기에 따라 크기가 변하는 rect

        // 이미 하이퍼링크가 있는지 확인
        if (!document.getElementById('pageTwoLink')) {
        // HTML 하이퍼링크 요소 생성
        const linkElement = document.createElement('a');
        linkElement.id = 'pageTwoLink';  // 링크에 ID 부여
        linkElement.style.position = 'absolute';
        linkElement.style.left = `${width / 2 - 16}px`;  // x 좌표
        linkElement.style.top = `${height / 5 - 16}px`;  // y 좌표
        linkElement.style.color = 'blue';  // 글자 색상
        linkElement.style.fontSize = '25px';  // 글자 크기


        // 특정 링크의 글자색을 다르게 설정
        if (text === 'B, C, D') {
            linkElement.style.color = 'white';  // 'A' 링크는 흰색
        } else {
            linkElement.style.color = 'blue';  // 나머지 링크는 파란색
        }
        

        // 링크를 body에 추가
        document.body.appendChild(linkElement);
    

        } else {
            // 링크 위치 업데이트 (화면 크기 변경 시에도 위치가 변경됨)
            const linkElement = document.getElementById('pageTwoLink');
            linkElement.style.left = `${width / 2 - 50}px`;  // x 좌표 업데이트
            linkElement.style.top = `${height / 5 - 10}px`;  // y 좌표 업데이트
        }


        
        // 가운데 위치한 사각형 그리기
        rectMode(CENTER);  // 중심 기준으로 사각형 그리기
        noStroke ();
        fill(255);
        rect(width / 2, height / 3.1, rectSize+400, rectSize-55);  // 중앙에 사각형
        rect(width / 2, height / 4, rectSize-25, rectSize+40);  // 중앙에 사각형
        rect(width / 2.75, height / 4, rectSize-15, rectSize);  // 중앙에 사각형
        rect(width / 1.58, height / 4, rectSize-10, rectSize-10);  // 중앙에 사각형
        }

        function page_three() {
            // 페이지 3 그리기
            textSize(32);
            textAlign(CENTER, CENTER);
            noStroke ();
            fill(255);

        // 모바일과 데스크탑에서 상자 크기 조절
        let rectSize;
        if (window.innerWidth < 768) {
            rectSize = min(width, height) * 0.2; // 모바일: 흰 상자 크기를 줄이기 (조금 더 큼)
        } else {
            rectSize = min(width, height) * 0.075; // 데스크탑: 흰 상자 크기 설정
        }

        // 링크 위치 조정
        let linkOffsetX = window.innerWidth < 768 ? 0 : 35; // 모바일에서 링크의 X 위치 조정
        let linkOffsetY = window.innerWidth < 768 ? -10 : -15; // 모바일에서 링크의 Y 위치 조정


        // 페이지 1 하이퍼링크 생성 및 위치 지정
        
        createOrUpdateLink('pageThreeLink0', 'https://webofcogito2.neocities.org/html_work_link/independent_point', 'E', width / 2 + linkOffsetX, height / 8 + linkOffsetY);
        createOrUpdateLink('pageThreeLink1', 'https://webofcogito2.neocities.org/html_work_link/independent_point4', 'E1', width / 2.15 + linkOffsetX, height / 4 + linkOffsetY);
        createOrUpdateLink('pageThreeLink2', 'https://webofcogito2.neocities.org/html_work_link/independent_point3', 'E2', width / 1.94 + linkOffsetX, height / 4 + linkOffsetY);
        createOrUpdateLink('pageThreeLink3', 'https://webofcogito2.neocities.org/html_work_link/independent_point2', 'E3', width / 2.15 + linkOffsetX, height / 3 + linkOffsetY);
        createOrUpdateLink('pageThreeLink4', 'https://webofcogito2.neocities.org/html_work_link/independent_point1', 'E4', width / 1.94 + linkOffsetX, height / 3 + linkOffsetY);
        
        updateLinkVisibility();

        stroke(255);  // 검정색 선
        strokeWeight(3);  // 선의 두께
        strokeCap(SQUARE);
        // 화면 크기에 따라 크기가 변하는 rect

        // 이미 하이퍼링크가 있는지 확인
        if (!document.getElementById('pageThreeLink')) {
        // HTML 하이퍼링크 요소 생성
        const linkElement = document.createElement('a');
        linkElement.id = 'pageThreeLink';  // 링크에 ID 부여
        linkElement.style.position = 'absolute';
        linkElement.style.left = `${width / 2 - 16}px`;  // x 좌표
        linkElement.style.top = `${height / 5 - 16}px`;  // y 좌표
        linkElement.style.color = 'blue';  // 글자 색상
        linkElement.style.fontSize = '25px';  // 글자 크기


        // 특정 링크의 글자색을 다르게 설정
        if (text === 'E') {
            linkElement.style.color = 'white';  // 'A' 링크는 흰색
        } else {
            linkElement.style.color = 'blue';  // 나머지 링크는 파란색
        }
        

        // 링크를 body에 추가
        document.body.appendChild(linkElement);
    

        } else {
            // 링크 위치 업데이트 (화면 크기 변경 시에도 위치가 변경됨)
            const linkElement = document.getElementById('pageThreeLink');
            linkElement.style.left = `${width / 2 - 40}px`;  // x 좌표 업데이트
            linkElement.style.top = `${height / 5 - 10}px`;  // y 좌표 업데이트
        }


        
        // 가운데 위치한 사각형 그리기
        rectMode(CENTER);  // 중심 기준으로 사각형 그리기
        noStroke ();
        fill(255);
        rect(width / 2+35, height / 4, rectSize-10, rectSize);  // 오른 사각형
        rect(width / 2-35, height / 4, rectSize-10, rectSize);  // 왼 사각형
        rect(width / 2+35, height / 3+10, rectSize-10, rectSize);  // 오른 아래 사각형
        rect(width / 2-35, height / 3+10, rectSize-10, rectSize);  // 왼 아래 사각형
        }

        function page_four() {
        // 모바일과 데스크탑에서 상자 크기 조절
        let rectSize;
        if (window.innerWidth < 768) {
            rectSize = min(width, height) * 0.12; // 모바일: 흰 상자 크기를 줄이기 (조금 더 큼)
        } else {
            rectSize = min(width, height) * 0.075; // 데스크탑: 흰 상자 크기 설정
        }


            // 페이지 4 그리기
            textSize(32);
            textAlign(CENTER, CENTER);
            noStroke ();
            fill(255);
            text('入口', width / 2, height / 11);

            // 페이지에 따라 이미지 표시 여부 조정
            updateLinkVisibility();

            // 문 가로선
            stroke(255);  // 검정색 선
            strokeWeight(5);  // 선의 두께
            strokeCap(SQUARE);
            let doorY = height / 7;  // 화면 중앙의 Y 좌표
            line(leftX + 157.5, doorY, rightX - 157.5, doorY);  // 가로줄 (화면 전체 너비)
    
            //문 세로선들
            line(leftX + 160, doorY, leftX + 160, lineHeight * 1);
            line(rightX - 160, doorY, rightX - 160, lineHeight * 1.);
            
    
            stroke(255);  // 검정색 선
            strokeWeight(3);  // 선의 두께
            strokeCap(SQUARE);
            

            // 이미 하이퍼링크가 있는지 확인
            if (!document.getElementById('pageFourLink')) {
            // HTML 하이퍼링크 요소 생성
            const linkElement = document.createElement('a');
            linkElement.id = 'pageFourLink';  // 링크에 ID 부여
            linkElement.style.position = 'absolute';
            linkElement.style.left = `${width / 2 - 16}px`;  // x 좌표
            linkElement.style.top = `${height / 5 - 16}px`;  // y 좌표
            linkElement.style.color = 'blue';  // 글자 색상
            linkElement.style.fontSize = '25px';  // 글자 크기
                
            // 링크를 body에 추가
            document.body.appendChild(linkElement);
    
            } else {
                // 링크 위치 업데이트 (화면 크기 변경 시에도 위치가 변경됨)
                const linkElement = document.getElementById('pageFourLink');
                linkElement.style.left = `${width / 2 - 50}px`;  // x 좌표 업데이트
                linkElement.style.top = `${height / 5 - 10}px`;  // y 좌표 업데이트
            }



        }

        function frame() {
        // 모든 페이지 공통의 프레임 작업        
        let marginTop = 45; // 화면 위쪽의 여유 공간
        let marginBottom = 350; // 화면 아래쪽의 여유 공간
        lineHeight = height - marginBottom - marginTop;
        stroke(255);  // 검정색 선
        strokeWeight(2);  // 선의 두께

        // 왼쪽 줄, 오른쪽 줄
        leftX = width / 2 - 250;  // 왼쪽 줄의 X 좌표 (화면 가운데에서 150px 왼쪽)
        rightX = width / 2 + 250;  // 오른쪽 줄의 X 좌표 (화면 가운데에서 150px 오른쪽)
        line(leftX, marginTop, leftX, lineHeight);
        line(rightX, marginTop, rightX, lineHeight);
        // 가운데 줄
        line(leftX, lineHeight, rightX, lineHeight);  // 가로줄 (화면 전체 너비)
        // 왼쪽 대각선
        let leftDiagonalXEnd = leftX - (width * 0.3);  // 화면 크기에 비례하여 계산된 값 (20%)
        let leftDiagonalYEnd = lineHeight + (height * 0.3);  // 아래쪽으로 화면 크기에 비례한 값 (20%)
        // 오른쪽 대각선
        let rightDiagonalXEnd = rightX + (width * 0.3);  // 화면 크기에 비례하여 계산된 값 (20%)
        let rightDiagonalYEnd = lineHeight + (height * 0.3);  // 아래쪽으로 화면 크기에 비례한 값 (20%)
        // 왼쪽 대각선, 오른쪽 대각선
        line(leftX, lineHeight, leftDiagonalXEnd-5, leftDiagonalYEnd+90);  // 45도 왼쪽 대각선 줄
        line(rightX, lineHeight, rightDiagonalXEnd+5, rightDiagonalYEnd+90);  // 45도 오른쪽 대각선 줄

       
        for (let i = 0; i < 200; i = i + 1) {
            stroke(255);
            fill(255);
            rect(i * 16+3, 30, 6, 6);
            rect(i * 16+3, 830, 6, 6);
          }
    
        }

    // 창 크기가 바뀔 때 캔버스 크기를 맞춤
    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        redraw();

    }