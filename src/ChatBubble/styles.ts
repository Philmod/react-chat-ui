export default {
  chatbubbleWrapper: {
    overflow: 'auto',
  },
  chatbubble: {
    backgroundColor: '#0084FF',
    borderRadius: 20,
    marginTop: 1,
    marginRight: 'auto',
    marginBottom: 1,
    marginLeft: 'auto',
    maxWidth: 425,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14,
    width: '-webkit-fit-content',
  },
  chatbubbleOrientationNormal: {
    float: 'right',
  },
  recipientChatbubble: {
    backgroundColor: '#ccc',
  },
  recipientChatbubbleOrientationNormal: {
    float: 'left',
  },
  p: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '300',
    margin: 0,

    /* These are technically the same, but use both */
    overflowWrap: 'break-word',
    wordWrap: 'break-word',

    MsWordBreak: 'break-all',
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    /* Instead use this non-standard one: */
    wordBreak: 'break-word',

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    MsHyphens: 'auto',
    MozHyphens: 'auto',
    WebkitHyphens: 'auto',
    hyphens: 'auto',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '500px',
    height: 'auto',
  },
  a: {
    color: '#FFF',
    textDecoration: 'underline',
  },
};
