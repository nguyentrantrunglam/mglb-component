import { useState, useRef } from "react";
import "./SwapCard.scss";
type Props = {};

export function SwapCard({}: Props) {
  const ref = useRef(null);
  const cards = [
    {
      id: 1,
      url: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/334563997_1427069548031427_6153761672655437636_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=u-Q_p2n09UoAX8PYxl6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfD5FUJS64NWp0Q8MFdVLOQ2ANfOW6b3Y2FCfgKZSRn5Aw&oe=64327769",
      title: "Card 1",
      status: "left",
    },
    {
      id: 2,
      url: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/299332500_3289138938037810_5543890420180190757_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=P2A74sF581cAX-7WX3Y&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBZKSHCy-0kyMjB4ypj4wsdT2nybwPB_Mq4nSpJyhbV4g&oe=6431D4BD",
      title: "Card 2",
      status: "active",
    },
    {
      id: 3,
      url: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/275138739_3164872860464419_6861463209642361691_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qtgl7hmih4YAX-nk8CS&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCLP3VpT38mIlmtA_aeFm-fucz_jf4jDpgpBYX4L7gUfg&oe=64339B2B",
      title: "Card 3",
      status: "right",
    },
    {
      id: 4,
      url: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/275138739_3164872860464419_6861463209642361691_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qtgl7hmih4YAX-nk8CS&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCLP3VpT38mIlmtA_aeFm-fucz_jf4jDpgpBYX4L7gUfg&oe=64339B2B",
      title: "Card 4",
      status: "behind",
    },
  ];
  const [listCards, setListCards] = useState(cards);
  const handleClick = (clickIndex: number) => {
    let newCards = [...listCards];
    newCards.forEach((card, index) => {
      card.status = "behind";
      if (clickIndex == 0) {
        newCards[clickIndex].status = "active";
        newCards[clickIndex + 1].status = "right";
        newCards[newCards.length - 1].status = "left";
      } else if (clickIndex == newCards.length - 1) {
        newCards[clickIndex].status = "active";
        newCards[clickIndex - 1].status = "left";
        newCards[0].status = "right";
      } else {
        newCards[clickIndex].status = "active";
        newCards[clickIndex - 1].status = "left";
        newCards[clickIndex + 1].status = "right";
      }
    });
    setListCards(newCards);
  };
  const handleClickButton = (clickIndex: number) => {
    if (ref) {
      clearTimeout(ref.current);
    }
    const activeIndex = listCards.findIndex((card) => card.status == "active");
    if (activeIndex == clickIndex) return;
    else {
      if (activeIndex < clickIndex) {
        if (clickIndex - activeIndex == listCards.length - 1) {
          handleClick(listCards.length - 1);
        } else {
          handleClick(activeIndex + 1);
          const timer = setTimeout(() => {
            handleClickButton(clickIndex);
          }, 300);
          ref.current = timer;
        }
      } else {
        if (activeIndex - clickIndex == listCards.length - 1) {
          handleClick(0);
        } else {
          handleClick(activeIndex - 1);
          const timer = setTimeout(() => {
            handleClickButton(clickIndex);
          }, 300);
          ref.current = timer;
        }
      }
    }
  };
  return (
    <div className="container">
      <div className="swap-cards">
        {listCards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.status}`}
            onClick={() => handleClick(index)}
          >
            <img src={card.url} className="card-image" />
            <div className="card-name">{card.title}</div>
          </div>
        ))}
      </div>
      <div className="list-buttons">
        {listCards.map((card, index) => (
          <button key={card.id} onClick={() => handleClickButton(index)}>
            {card.title}
          </button>
        ))}
      </div>
    </div>
  );
}
