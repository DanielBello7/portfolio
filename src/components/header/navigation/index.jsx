import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import { container, item } from "./animation";
import { navigation_items } from "./navigation-items";
import classNames from 'classnames';

export default function NavigationComponent() {
  const cn = (idx) => classNames({
    "btn ms-lg-5 txts": idx !== 0,
    "btn txts": idx === 0,
  });

  return (
    <motion.div className="d-flex flex-row my-3 my-md-0 my-lg-0" variants={container}
      initial="hidden" animate="show" exit="hidden">
      {navigation_items.map((nav, idx) => (
        <motion.a href={nav.href} className={cn(idx)} key={idx} variants={item}>
          <FormattedMessage id={nav.id} />
        </motion.a>
      ))}
    </motion.div>
  )
}
