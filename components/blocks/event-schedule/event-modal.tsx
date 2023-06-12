import { useState, useEffect } from 'react'

function bindKey(bindKey, handler) {
  const kHandler = ({ key }) => {
    if (key === bindKey) handler()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', kHandler);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', kHandler);
      }
    }
  }, []);
}

function setLocationHash(hash) {
  if (typeof window !== 'undefined') {
    if (history?.pushState) {
      history.pushState(null, null, hash);
    } else {
      window.location.hash = hash
    }
  }
}

export function EventModal({ children, content, name, link, hash, urlHash, modalStyle }) {
  const [openModal, setOpenModal] = useState(urlHash === hash);
  const modalHash = urlHash.includes('/') ? urlHash.split('/').at(0) : urlHash

  useEffect(() => {
    if (modalHash === hash) {
      open()
    } else {
      setOpenModal(false)
    }
  }, [urlHash]);

  const open = () => {
    if (!openModal) {
      setLocationHash(hash)
      setOpenModal(true)
    }

    // The modal needs to be open before we can scroll to the timeslot
    setTimeout(() => {
      scrollToTimeslot()
    }, 100);
  }

  const close = () => {
    setLocationHash('#')
    setOpenModal(false)
  }

  const scrollToTimeslot = () => {
    const timeslotIndex = urlHash.includes('/') && urlHash.split('/').at(1)
    if (modalHash && timeslotIndex) {
      const timeSlotId = `${modalHash}-timeslot${Number(timeslotIndex) + 1}`
      const element = document.getElementById(timeSlotId)
      element && element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  /* TODO: This runs on every modal */
  bindKey('Escape', close)

  return (
    <>
      <div className="h-full w-full" onClick={open}>
        {children}
      </div>
      <div className={`modal fixed inset-0 z-50 overflow-hidden flex items-center p-8 justify-center backdrop-blur-xl ${openModal ? "" : "hidden"}`}>
        <div className="modal-fader absolute inset-0 bg-black opacity-50" onClick={close}></div>
        <div className={`modal-wrap relative max-h-full w-full max-w-3xl ${modalStyle?.fill} ${modalStyle?.border}`}>
            <div className={`modal-header ${modalStyle?.padding} ${modalStyle?.headline}`}>{name}</div>
            <div className={`modal-body ${modalStyle?.padding} overflow-y-scroll border-gray-light border-b border-t`} style={{maxHeight: '70vh'}}>
              {content}
            </div>
            <div className={`modal-footer ${modalStyle?.padding} flex gap-4`}>
              {link &&
                <a href={link} target="_blank" className={`cursor-pointer btn-${modalStyle?.modalButtonStyle}`}>Website</a>
              }
              <a className={`cursor-pointer btn-${modalStyle?.modalButtonStyle}`} onClick={close}>Close</a>
            </div>
        </div>
      </div>
    </>
  )
}
