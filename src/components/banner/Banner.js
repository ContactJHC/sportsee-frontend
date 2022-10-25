import './Banner.css'

export default function Banner({userName}) {
  return (
    <>
        <div id='greeting'>
            <p>Bonjour &#20;
                <span id='userName'>
                    {userName}
                </span>
            </p>
        </div>
        <div id='motivationalText'>
            <p>Félicitations ! Vous avez explosé vos objectifs hier <span className='emoji' role='img' aria-label='dog' >👏</span></p>
        </div>
    </>
  )
}
