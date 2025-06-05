export const loaderTemplate = `
            <div class="loader" style="display:flex;justify-content:center;align-items:center;height:100%;">
                <span>Carregando...</span>
                <div style="margin-left:10px;width:20px;height:20px;border:3px solid #ccc;border-top:3px solid #333;border-radius:50%;animation:spin 1s linear infinite;"></div>
            </div>
            <style>
                @keyframes spin { 100% { transform: rotate(360deg); } }
            </style>
        `;