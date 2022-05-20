import './Partners.scss'
export default function Partners() { 
    const Partnersdata = [
    {
        id : 1,
        img: 'img/partners/telrad.png'
    },
    {
        id : 2,
        img: 'img/partners/linkbuild.png'
    },
    {
        id : 3,
        img: 'img/partners/starlink.png'
    },
    {
        id : 4,
        img: 'img/partners/delta.png'
    },
    {
        id : 5,
        img: 'img/partners/saima.png'
    },
    {
        id : 6,
        img: 'img/partners/insol.png'
    },
    {
        id : 7,
        img: 'img/partners/tic.png'
    },
    {
        id : 8,
        img: 'img/partners/radwin.png'
    },
    {
        id : 9,
        img: 'img/partners/eltexalatau.png'
    },
    {
        id : 10,
        img: 'img/partners/siklu.png'
    },
    {
        id : 11,
        img: 'img/partners/cambium.png'
    },
    {
        id : 12,
        img: 'img/partners/ceragon.png'
    },
   

]
    return(
        <div className="Partners_section container">
                <h2>Партнеры</h2>
                <div className="Partners_list_container">
                    {Partnersdata.map((data)=> (
                        <div key={`partners${data.id}`} className='Partners'>
                            <img src={data.img} alt={data.img}/>
                        </div>
                    ))}
                </div>
        </div>
    )
}