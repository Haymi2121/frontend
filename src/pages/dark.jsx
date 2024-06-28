import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {}
    </Spoiler>
  );
}
export default Demo