import LoadingText from './loading/Text';
import LoadingMinimap from './loading/Minimap';

const MatchDetailsLoading = () => {
  return (
    <section className="flex flex-col justify-between md:flex-row bg-white rounded-lg shadow-md p-6">
      <LoadingText />
      <div className="mt-6 md:mt-0">
        <LoadingMinimap />
      </div>
    </section>
  );
};

export default MatchDetailsLoading;
