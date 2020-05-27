import React from "react";
import { Accordion } from "semantic-ui-react";
import _ from "lodash";
import faker from "faker";

const panels = _.times(3, (i) => ({
    key: `panel - ${i}`,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs()
}))

const ChatRoomSelect = () => {
    return(
        <Accordion 
            defaultActiveIndex={[0, 2]}
            panels={panels}
            exclusive={false}
            fluid
        />
    )
}

export default ChatRoomSelect;