import * as React from 'react';
import Emojify from 'react-emojione';
import Linkify from 'react-linkify';
import ChatBubbleProps from './interface';
import styles from './styles';

const defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {},
};

function extractImageUrls(s) {
  var matches = s.match(/(\bhttps?:\/\/\S*\.(?:png|jpg|jpeg|gif))/gi);
  return matches;
}

function formatMessage(message) {
  return {
    text: message,
    imageUrls: extractImageUrls(message),
  };
}

export default class ChatBubble extends React.Component {
  props;

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  public render() {
    const { bubblesCentered } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatbubble, text } = bubbleStyles;

    // message.id 0 is reserved for blue
    const chatBubbleStyles =
      this.props.message.id === 0
        ? {
            ...styles.chatbubble,
            ...bubblesCentered ? {} : styles.chatbubbleOrientationNormal,
            ...chatbubble,
            ...userBubble,
          }
        : {
            ...styles.chatbubble,
            ...styles.recipientChatbubble,
            ...bubblesCentered
              ? {}
              : styles.recipientChatbubbleOrientationNormal,
            ...chatbubble,
            ...userBubble,
          };

    const componentDecorator = (href, text, key) => (
      <a style={styles.a} href={href} key={key} target="_blank">
        {text}
      </a>
    )

    const m = formatMessage(this.props.message.message)

    return (
      <div
        style={{
          ...styles.chatbubbleWrapper,
        }}
      >
        <div style={chatBubbleStyles}>
          <p style={{ ...styles.p, ...text }}>
            <Emojify>
              <Linkify componentDecorator={componentDecorator}>
                {m.text}
              </Linkify>
            </Emojify>
          </p>
          {m.imageUrls && m.imageUrls.map((url, i) => (
            <img key={i} style={styles.img} src={url} alt={url} />
          ))}
        </div>
      </div>
    );
  }
}

export { ChatBubbleProps };
