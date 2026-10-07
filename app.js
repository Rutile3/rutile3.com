// 年号の自動更新（フッター）
document.getElementById("year").textContent = new Date().getFullYear();

// データ読み込み関数
async function loadData() {
    try {
        const response = await fetch('assets/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('データ読み込みエラー:', error);
        // 必要に応じてUIにエラーメッセージを表示
        alert('データの読み込みに失敗しました。');
        return null;
    }
}

// 単一カード生成関数
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
        <a class="card text-center link-underline link-underline-opacity-0 h-100 hover-rise" href="${item.href}" target="_blank" rel="noopener">
            <img src="${item.img}" class="card-img-top p-3" alt="${item.title}" />
            <div class="card-body py-2">
                <h3 class="h6 mb-1">${item.title}</h3>
                ${item.desc ? `<p class="card-text small text-muted mb-0">${item.desc}</p>` : ''}
            </div>
        </a>
    `;
    return card;
}

// カードレンダリング関数
function renderCards(sectionId, data) {
    const container = document.querySelector(`#${sectionId} .row`);
    if (!container) return; // コンテナが存在しない場合のガード
    data.forEach(item => {
        const card = createCard(item);
        container.appendChild(card);
    });
}

// 作品カードはindex.htmlに直接記述するため、読み込み時の描画は行わない。
