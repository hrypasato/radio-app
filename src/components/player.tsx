import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const RadioPlayer = () => {

    return (
        <AudioPlayer
            autoPlay={true}
            showJumpControls={false}
            customAdditionalControls={[]}
            onPlay={e => console.log("onPlay")}
            onError={e => console.log(e)}
            defaultDuration=""
            src="http://example.com/audio.mp3"
        // other props here
        />
    );
}