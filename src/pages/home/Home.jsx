import { useState, useEffect } from 'react';

import style from './Home.module.css';
import { BtnHome } from '../../components/btnHome/BtnHome';

export function Home () {

    const [botoes, setBotoes] = useState([]);

    async function getBtns () {
        return await fetch('https://jsonplaceholder.typicode.com/todos/10')
            .then(resp => resp.json()) //  DADOS DO TIPO AÇÃO DOS BTNS E DO TIPO BANNERS  0 abrir tela, 1 abrir url interna, 2 abrir url externa
            .then(el => {
                el = `  {
                        "botoes": [
                            {
                                "titulo": "Fidelidade",
                                "tipo_acao": 0, 
                                "icone": "fa-solid fa-dollar-sign",
                                "url_imagem": null,
                                "tela": "fidelidade",
                                "url": null
                            },
                            {
                                "titulo": "Crédito",
                                "tipo_acao": 0,
                                "icone": "",
                                "url_imagem": "https://png.pngtree.com/element_pic/17/09/01/0dcded715202f51bdc6060c4c2538e5f.jpg",
                                "tela": null,
                                "url": ""
                            },
                            {
                                "titulo": "Resgates de Prêmios",
                                "tipo_acao": 0,
                                "icone": "fa-solid fa-ticket",
                                "url_imagem": "",
                                "tela": "resgateDeBeneficios",
                                "url": ""
                            },
                            {
                                "titulo": "Clube de Beneficios Zaztech",
                                "tipo_acao": 0,
                                "icone": "fa-solid fa-hand-holding-heart",
                                "url_imagem": "",
                                "tela": "clubeDeBeneficios",
                                "url": ""
                            },
                            {
                                "titulo": "Convidar",
                                "tipo_acao": 0,
                                "icone": "fa-solid fa-user-check",
                                "url_imagem": "",
                                "tela": "convidar",
                                "url": ""
                            },
                            {
                                "titulo": "Conta Digital",
                                "tipo_acao": 0,
                                "icone": "fa-solid fa-wallet",
                                "url_imagem": "",
                                "tela": "contaDigital",
                                "url": ""
                            },
                            {
                                "titulo": "Dependentes",
                                "tipo_acao": 0,
                                "icone": "fa-solid fa-users",
                                "url_imagem": "",
                                "tela": "dependentes",
                                "url": ""
                            },
                            {
                                "titulo": "Shopping",
                                "tipo_acao": 0,
                                "icone": "fa-solid fa-basket-shopping",
                                "url_imagem": "",
                                "tela": "shopping",
                                "url": ""
                            },
                            {
                                "titulo": "Wallet",
                                "tipo_acao": 0,
                                "icone": "fa-solid fa-credit-card",
                                "url_imagem": "",
                                "tela": "wallet",
                                "url": ""
                            },
                            {
                                "titulo": "AMO VANTAGENS",
                                "tipo_acao": 2,
                                "icone": "fa-solid fa-heart",
                                "url_imagem": "",
                                "tela": "",
                                "url": "www.google.com.br"
                            }
                        ],
                        "banners": [
                            {
                                "tipo_acao": 1, 
                                "url_imagem": null,
                                "tela": "tela-fidelidade",
                                "url": null
                            },
                            {
                                "tipo_acao": 0,
                                "url_imagem": "https://umaimagem.com.br",
                                "tela": null,
                                "url": "https://google.com.br"
                            }
                        ]
                    }`;
    
                return JSON.parse(el);
            })
    }
    
    useEffect(() => {
        async function fetchBtns() {
            try {
                const response = await getBtns();
                setBotoes(response?.botoes);
            } catch (error) {
                console.error('Erro ao buscar os botões:', error);
            }
        }

        fetchBtns();
    }, []);

    let chave = 0

    return (
        <div className={style.containerItensMenuHome}>
            {
                botoes.map(el => {
                    return <BtnHome key={chave++} imagem={el?.url_imagem} icone={el?.icone} spanIcone={el?.titulo} />
                })
            }
        </div>
    )
}