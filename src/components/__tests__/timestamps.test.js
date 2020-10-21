import React from 'react';
import Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timestamps from '../timestamps';

Enzyme.configure({ adapter: new Adapter() });

describe('it mounts timestamps somponent', async () => {
        const timeStamp = mount( <Timestamps /> ); 
        expect(timeStamp.find('.timestmps_wrap')).to.have.lengthOf(1);
        
        // expect(1+1).toEqual(2);
        
})