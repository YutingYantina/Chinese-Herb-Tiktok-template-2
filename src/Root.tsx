import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld/HelloWorld";
export const RemotionRoot: React.FC = () => {
  return (
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={1518} 
        fps={30}
        width={1080}
        height={1920}
        schema={myCompSchema}
        defaultProps={{
          titleText: "Clove: A fragrant spice with diverse uses",
          titleColor: "#FFFFFF",
        }}
      />
  );
};
