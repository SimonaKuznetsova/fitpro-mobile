import React from 'react';
import Svg, {Path, G, Use, Defs} from 'react-native-svg';
import {Image} from "react-native";

const LogoIcon = ({width=30}) => {
    return (
        // <Svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width={width} height={width}>
        //     <Defs>
        //         <Image  width="50" height="50" id="img_1" source={{uri: "data:image/png;base64,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"}}/>
        //         <Image  width="10" height="10" id="img_2" source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnwAAAJtCAMAAACbuV1aAAAAAXNSR0IB2cksfwAAAwBQTFRF////////////////////////AAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////WDnv8QAAAQB0Uk5Tes+fbz4PAID/3q5+TR3tvY1cLAP2yZlpOAv92Kh4Rxjnt4dWJgL0xpZmNQn81aV1RBLhsYFQIPDAkGAvBvljyGE7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"}}/>
        //     </Defs>
        //     <Use id="Background" style="display: none" href="#img_1" x="0" y="0"/>
        //     <Use id="FIT" href="#img_2" x="0" y="0"/>
        // </Svg>
        <Svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="70" height="70">
            <Defs>
                <Image  width="100" height="100" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnwAAAJtCAMAAACbuV1aAAAAAXNSR0IB2cksfwAAAwBQTFRF////////////////////////AAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////WDnv8QAAAQB0Uk5Tes+fbz4PAID/3q5+TR3tvY1cLAP2yZlpOAv92Kh4Rxjnt4dWJgL0xpZmNQn81aV1RBLhsYFQIPDAkGAvBvljyGE7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"/>
            </Defs>
            <Image id="FIT" href="#img1" x="182" y="189"/>
        </Svg>
    );
};

export default LogoIcon;