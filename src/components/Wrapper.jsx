import { cn } from "@/lib/utils";
import PropTypes from 'prop-types';

const Wrapper = ({ children, className }) => {
  return (
    <div className={cn(
      'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
      className
    )}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Wrapper;