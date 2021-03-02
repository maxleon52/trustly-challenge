import React, {
  useRef,
  useEffect,
  useCallback,
  MouseEvent,
  useState,
} from 'react';
import { useTransition } from 'react-spring';
// import { FiChevronLeft, FiChevronUp, FiX } from 'react-icons/fi';

import { Overlay, Container, CloseButton, BackButton } from './styles';
// import locker from '../../assets/locker.svg';

interface IModalProps {
  onCancel(): void;
  backContent?: (content: string) => void;
  currentContentModal?: string;
  containerStyle?: React.CSSProperties;
}

// const translate: {
//   [key: string]: string;
// } = {
//   message: 'selectBank',
//   loginBank: 'message',
//   finish: 'loginBank',
// };

// const translateTitle: {
//   [key: string]: string;
// } = {
//   selectBank: 'Select your bank',
//   message: 'Sign into your bank',
//   loginBank: 'Sign into your bank',
//   finish: 'Choose an account',
// };

const Modal: React.FC<IModalProps> = ({
  children,
  onCancel,
  // backContent,
  // currentContentModal,
  containerStyle,
}) => {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);

  const transitions = useTransition(isVisible, null, {
    from: { opacity: 0, transform: 'scale(0)', transition: 'all 0.1s' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  useEffect(() => {
    const scrollBy = () => {
      containerRef.current?.scrollBy();
    };

    document.addEventListener('wheel', scrollBy);

    return () => {
      document.removeEventListener('wheel', scrollBy);
    };
  }, []);

  const handleCancel = useCallback(() => {
    setIsVisible(false);

    const timer = setTimeout(() => {
      onCancel();

      clearTimeout(timer);
    }, 500);
  }, [onCancel]);

  const handleOverlayClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === ref.current) {
        onCancel();
      }
    },
    [onCancel, ref],
  );

  return (
    <Overlay visible={isVisible} onClick={handleOverlayClick} ref={ref}>
      {transitions.map(({ item, key, props }) => {
        if (item) {
          return (
            <Container
              key={key}
              ref={containerRef}
              style={{ ...props, ...containerStyle }}
            >
              {/* <header>
                <div>
                  <BackButton
                    onClick={() => backContent(translate[currentContentModal])}
                  >
                    <FiChevronLeft color="#52565F" size={20} />
                  </BackButton>
                  <h4>{translateTitle[currentContentModal]}</h4>

                  <CloseButton onClick={handleCancel}>
                    <FiX color="#52565F" size={20} />
                  </CloseButton>
                </div>
                <span>Amount: $100.00</span>
              </header> */}

              <section>{children}</section>

              {/* <footer>
                <img src={locker} alt="" />
                <p>
                  Secure connection by <span>PayWithMayBank&reg;</span>
                </p>
                <FiChevronUp color="#52565F" size={20} />
              </footer> */}
            </Container>
          );
        }

        return <div key={key} />;
      })}
    </Overlay>
  );
};

export default Modal;
