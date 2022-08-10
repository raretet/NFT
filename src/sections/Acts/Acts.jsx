import React, { useState } from 'react'

const Acts = () => {

    const titleList = ['Blvck Phantoms','Blvck Shadows' ]
    const textList = [ 'Introducing the rarest 10% of the Blvck Genesis NFT collection, the Blvck Phantoms. Characterised by their wings made of light and shining grey skin, the 999 Phantoms roam freely in Blvck City. Blvck Phantoms remain emotionless and live without feelings.',  'Introducing the rarest 1% of Blvck Genesis, the Shadows. There are only 99 of them, characterised by their metallic dark skin and can be found in the depths of Blvck Land. Blvck Shadows are the firstborns of the Blvck Realm, their immortality is under threat in a world tainted by myths. Act II depicts the rebellion of the Shadows against the Phantoms to claim what was once theirs. The rise of the Shadows has began.']
    const backgrounds = ["/images/blvck_avatar.png", "/images/video_act_ii.png"];
    const videosLinks = ["https://www.youtube.com/embed/D0_JszR9cuA", "https://www.youtube.com/embed/gfmhF5YN4W4"];
    const [titleIndex, setTitleIndex] = useState(0)
    const [textIndex, setTextIndex] = useState(0)
    const [isVideoClicked, setIsVideoClicked] = useState(false);

  return (
    <section>
    <div className='acts' style={{backgroundImage: `url(${backgrounds[titleIndex]})`}}>
      <div className='act_container'>
          <div className='section3_content'>
            <div className='section3_header'>
              <button className={textIndex === 0 ? 'active_button' : ''} onClick={() => {setTextIndex(0); setTitleIndex(0)}}>ACT I</button>
              <button className={textIndex === 1 ? 'active_button' : ''} onClick={() => {setTextIndex(1); setTitleIndex(1)}}>ACT II</button>
              <button className='disabled_button' onClick={() => setTextIndex(1)} disabled>ACT III</button>
            </div>
          <div className='section3_text'>
            { !isVideoClicked && (
              <>
                <h1 className='section3_title' >{titleList[titleIndex]}</h1>
                <div className='section3_subtitle' >{textList[textIndex]}</div>
              </>
            )}
            </div>
        </div>
      </div>
      <div className='play'>
        <div className='section3_link'>
          { !isVideoClicked ?
            (
              <>
                <img className="play_image" src='/images/play-button.svg' alt=''/>
                <button onClick={() => setIsVideoClicked(true)}>Play Now</button>
              </>
            ) : (
              <div className="video_section">
                <iframe 
                  className="video_data"
                  src={videosLinks[textIndex]}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                />
                <button class="close-video-button" onClick={() => setIsVideoClicked(false)}>Close</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
    </section>
  )
}

export default Acts