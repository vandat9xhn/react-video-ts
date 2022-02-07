//
export function observerDisplay({
  elm,
  callbackDisplay = () => {},
  callbackNoDisplay = () => {},
  options = {}
}: {
  elm: HTMLElement
  callbackDisplay?: () => void
  callbackNoDisplay?: () => void
  options?: IntersectionObserverInit | undefined
}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callbackDisplay()
      } else {
        callbackNoDisplay()
      }
    }, options)
  })

  observer.observe(elm)
}
