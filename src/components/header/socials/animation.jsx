export const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.9,
      delayChildren: 0.7,
      staggerChildren: 0.4
    }
  }
}

export const item = {
  hidden: {
    y: "-10%",
    opacity: 0
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9
    }
  }
}

