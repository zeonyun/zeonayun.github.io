window.addEventListener('load', function () {
    // 저작권 표시
    const copy = document.createElement('div');
    copy.id = 'copyright';
    copy.textContent = '© Jeon Ahyun';
    document.body.appendChild(copy);

    const bodyImgs = Array.from(document.querySelectorAll('body > img'));
    if (bodyImgs.length === 0) return;

    // 가로/세로 분류
    bodyImgs.forEach(function (img) {
        img.classList.add(img.naturalHeight > img.naturalWidth ? 'work-portrait' : 'work-landscape');
    });

    // 이미지 사이의 최상위 <br> 제거 (CSS margin으로 대체)
    Array.from(document.querySelectorAll('body > br')).forEach(function (br) {
        br.remove();
    });

    // 연속된 세로 이미지들을 최대 2개씩 flex row로 묶기 (DOM 인접 기준)
    const children = Array.from(document.body.children);
    let i = 0;
    while (i < children.length) {
        const child = children[i];
        if (child.tagName === 'IMG' && child.classList.contains('work-portrait')) {
            let j = i;
            while (j < children.length && children[j].tagName === 'IMG' && children[j].classList.contains('work-portrait')) j++;
            // 최대 2개씩 청크로 나눠 각각 row 생성
            for (let start = i; start < j; start += 2) {
                const end = Math.min(start + 2, j);
                if (end - start >= 2) {
                    const row = document.createElement('div');
                    row.className = 'work-portrait-row';
                    children[start].parentNode.insertBefore(row, children[start]);
                    for (let k = start; k < end; k++) row.appendChild(children[k]);
                }
            }
            i = j;
        } else {
            i++;
        }
    }
});
