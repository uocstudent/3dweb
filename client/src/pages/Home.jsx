import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
 } from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
            // Cambio de Logo en esta sección
              src='./logo.png'
              alt="logo"
              className="w-8 h-8 object-contain"/>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text text-white">
                BE<br className="xl:block hidden" /> DIFFERENT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-white text-base">
              Desata tu imaginación con nuestra nueva <strong>plataforma 3D!</strong><br className="xl:block hidden" />
              Diseña, personaliza y crea productos únicos. <br/><strong>¡Sé diferente, sé tú!</strong>
              </p>

              {/* <CustomButton 
                type="filled"
                title="Personalízalo"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              /> */}

<CustomButton
  type="filled"
  title="Personalízalo"
  handleClick={() => state.step = 'select'}
  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
/>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home