import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const RadioPlayer = ({ source = "http://example.com/audio.mp3" }) => {

    return (
        <AudioPlayer
        autoPlay    
        autoPlayAfterSrcChange={true}
            showJumpControls={false}
            customAdditionalControls={[]}
            onPlay={_ => console.log("onPlay")}
            onError={e => console.error(e)}
            defaultDuration=""
            src={source}
        // other props here
        />
    );
}