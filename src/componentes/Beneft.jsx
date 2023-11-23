import benefit1 from '../assets/beneficio-1.jpeg'
import benefit2 from '../assets/beneficio-2.jpeg'
import benefit3 from '../assets/beneficio-3.jpeg'

export default function Benefit() {
    return (
        <section className="benefits-container">
            <h3 className="benefits-title">Vantagens</h3>
            <div className="benefit-card-wrapper">
                <div className="benefit-card">
                    <img src={benefit1} className="image" alt='Imagem benefício' />
                    <div className="benefit-text-container">
                        <h3>1</h3>
                        <div className="benefit-card-info">
                            <p>Diminuição da superlotação dos hospitais, gerando maior eficiência na área da saúde.</p>
                        </div>
                    </div>
                </div>

                <div className="benefit-card">
                    <img src={benefit2} className="image" alt='Imagem benefício' />
                    <div className="benefit-text-container">
                        <h3>2</h3>
                        <div className="benefit-card-info">
                            <p>Oferece solicitação simplificada de ambulâncias a preços acessíveis, garantindo resposta rápida em situações de emergência.</p>
                        </div>
                    </div>
                </div>

                <div className="benefit-card">
                    <img src={benefit3} className="image" alt='Imagem benefício' />
                    <div className="benefit-text-container">
                        <h3>3</h3>
                        <div className="benefit-card-info">
                            <p>O SmartMed agiliza a resposta a situações críticas, otimizando o deslocamento de ambulâncias e proporcionando assistência imediata em momentos de urgência.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}