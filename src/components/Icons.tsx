import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProp = PropsWithChildren<{
  name: string;
}>;
const Icons = ({name}: IconProp) => {
  return (
    <React.Fragment>
      {name === 'circle' && (
        <Icon name="circle-thin" size={38} color={'#f7cd2e'} />
      )}
      {name === 'cross' && <Icon name="times" size={38} color={'#38cc77'} />}
      {name !== 'circle' && name !== 'cross' && (
        <Icon name="pencil" size={38} color={'#0d0d0d'} />
      )}
    </React.Fragment>
  );
};

export default Icons;
