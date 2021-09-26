import Card from "../../../utils/card/Card"
import "../content.scss"
import "./gift.scss"

import watch from "../../../assets/watch.png"
import bracelet from "../../../assets/bracelet.png"
import pendant from "../../../assets/pendant.png"
import heart from "../../../assets/heart.png"
import { useState } from "react"

import emailjs from "emailjs-com"
import emailConfig from "../../../config/email-config"

type GiftType = {
    index?: number,
    name: string,
    title: string,
    image: string
}

const giftsCatalog: GiftType[] = [
    { index: 0, name: 'watch', title: 'Watch', image: watch },
    { index: 1, name: 'pendant', title: 'Pendant', image: pendant },
    { index: 2, name: 'bracelet', title: 'Bracelet', image: bracelet },
    { index: 3, name: 'kiss', title: 'Kiss', image: heart },
]

const Gift = () => {

    const [selectedGift, setGift] = useState<GiftType>({ name: '', title: '', image: '' })
    const [isGiftSelected, setisGiftSelected] = useState<boolean>(false)

    const OnClickGift = (value: number | undefined) => {

        console.log("GIFT SELECTED BTN", value)
        if (value === undefined) { return }
        let gift = giftsCatalog.find(element => value === element.index)

        if (gift !== undefined) { setGift(gift) }
    }

    const onClickSubmit = (e: React.MouseEvent<HTMLElement>) => {

        console.log("Send email for", selectedGift.name);
        e.preventDefault();

        emailjs.init(emailConfig.user_id);

        var templateParams = {
            subject: 'A Gift from Oit',
            to_name: 'rohithegde444@gmail.com',
            from_name: 'rohithhdev444@gmail.com',
            message: 'You have selected ' + selectedGift.name.toUpperCase() + " as your gift. Expect it to be gited by Oit in few days ",
        };

        emailjs.send(emailConfig.service_id, emailConfig.template_id, templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setisGiftSelected(true)
            }, function (error) {
                console.log('FAILED...', error);
            });

    }

    return (
        <div id="gift" className="gift-container">
            {
                isGiftSelected ?
                    <div className="gift-title">YOU HAVE SELECTED YOUR GIFT AS {selectedGift.name.toUpperCase()}</div>
                    :
                    <>
                        <div className="gift-title">SELECT YOUR GIFT</div>
                        <div className="gift-row">
                            {giftsCatalog.map(data => {
                                return <Card
                                    key={data.index}
                                    title={data.title}
                                    alt={data.name}
                                    images={data.image}
                                    onClick={() => OnClickGift(data.index)}
                                    isSelected={selectedGift.index === data.index}
                                />
                            })}
                        </div>

                        {
                            selectedGift.name !== '' &&
                            <button
                                className="gift-submit"
                                onClick={onClickSubmit}
                            >
                                <span className="btn-shadow"></span>
                                <span className="btn-edge"></span>
                                <span className="btn-text">SUBMIT</span>
                            </button>
                        }
                    </>

            }

        </div>
    )
}

export default Gift
