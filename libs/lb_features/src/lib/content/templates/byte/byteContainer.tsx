import { CardHeader, CardWrapper } from '@dr/lb_presentation';

import RenderImg from 'libs/lb_utils/src/lib/renderImage';

const ByteContainer = () => {
  return (
    <>
      <CardWrapper>
        <CardHeader>Sitting Is The New Smoking</CardHeader>

        <RenderImg
          imgDetails={{
            imgPath: `micros/sitting_smoke`,
            imgTwClasses: 'w-76 h-124',
          }}
        />
      </CardWrapper>
    </>
  );
};

export default ByteContainer;
