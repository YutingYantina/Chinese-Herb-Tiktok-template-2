import { spring, staticFile } from 'remotion';
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  Audio
} from 'remotion';
import { Title } from './Title';
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import { MyText } from './MyText';
import { MyImage } from './MyImage';
import { TitleImage } from './TitleImage';
import { StyledText } from "./StyledText";

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
  titleText: propOne,
  titleColor: propTwo,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const textTranslationProgress = spring({
    frame: frame - 25,
    fps,
    config: {
      damping: 100,
    },
  });

  const textTranslation = interpolate(
    textTranslationProgress,
    [0, 1],
    [0, -150]
  );

  const opacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <Audio src={staticFile("background.mp3")} />
      <AbsoluteFill style={{ opacity }}>
        <Sequence from={0} durationInFrames={109}>
          <TitleImage src={staticFile('/ImageTitle.png')}/>
          <Title titleText={propOne} titleColor={propTwo} />
          <Audio src={staticFile("/TitleAudio.mp3")} />
        </Sequence>
        <Sequence from={109} durationInFrames={189}>
          <StyledText text="Clove\nScientific Name: Syzygium aromaticum" />
          <MyText text="Hey there, everyone! Today, we’re diving into the world of a fascinating and fragrant spice with some incredible medicinal properties—clove." />
          <MyImage src={staticFile("/Image1.png")} />
          <Audio src={staticFile("/Speech1.mp3")} />
        </Sequence>
        <Sequence from={298} durationInFrames={232}>
          <StyledText text="Clove\nScientific Name: Syzygium aromaticum" />
          <MyText text="Clove is actually the dried flower bud of a plant from the myrtle family, originally hailing from the Maluku Islands in Indonesia." />
          <MyImage src={staticFile("/Image3.png")} />
          <Audio src={staticFile("/Speech2.mp3")} />
        </Sequence>
        <Sequence from={530} durationInFrames={279}>
          <StyledText text="Clove\nScientific Name: Syzygium aromaticum" />
          <MyText text="These clove buds are quite the sight, purple and oval-shaped with a little calyx, resembling tiny nails. That’s why they’re known as cloves." />
          <MyImage src={staticFile("/Image2.png")} />
          <Audio src={staticFile("/Speech3.mp3")} />
        </Sequence>
        <Sequence from={809} durationInFrames={172}>
          <StyledText text="Clove\nScientific Name: Syzygium aromaticum" />
          <MyText text="Before they can work their magic as a spice, these buds need to be dried after harvest." />
          <MyImage src={staticFile("/Image4.png")} />
          <Audio src={staticFile("/Speech4.mp3")} />
        </Sequence>
        <Sequence from={981} durationInFrames={103}>
          <StyledText text="Clove\nScientific Name: Syzygium aromaticum" />
          <MyText text="Clove is warm in nature and spicy in taste." /> 
          <MyImage src={staticFile("/Image5.png")} />
          <Audio src={staticFile("/Speech5.mp3")} />
        </Sequence>
        <Sequence from={1084} durationInFrames={233}>
          <StyledText text="Clove\nScientific Name: Syzygium aromaticum" />
          <MyText text="You can enjoy clove in various ways—brew it into tea, grind it into powder, or use it to make flavorful spices." />
          <MyImage src={staticFile("/Image6.png")} />
          <Audio src={staticFile("/Speech6.mp3")} />
        </Sequence>
        <Sequence from={1317} durationInFrames={201}>
          <StyledText text="Clove\nScientific Name: Syzygium aromaticum" />
          <MyText text="Clove finds its way into a wide range of applications, from food and beverages to aromatherapy." />
          <MyImage src={staticFile("/Image7.png")} />
          <Audio src={staticFile("/Speech7.mp3")} />
        </Sequence>
        <Sequence from={1518} durationInFrames={400}>
          <StyledText text="Clove\nScientific Name: Syzygium aromaticum" />
          <MyText text="In the world of traditional Chinese medicine, clove is believed to treat hiccups, vomiting, cold abdominal pain, kidney Yang deficiency, and more. It’s been a staple in clinical practice for ages." />
          <MyImage src={staticFile("/Image8.png")} />
          <Audio src={staticFile("/Speech8.mp3")} />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
