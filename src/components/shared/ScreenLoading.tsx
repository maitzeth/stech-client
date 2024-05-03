import { Oval } from 'react-loader-spinner';
import colors from 'tailwindcss/colors';

export const ScreenLoading = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color={colors.black}
        ariaLabel="page-loading"
        secondaryColor={colors.gray['700']}
      />
    </div>
  );
};
