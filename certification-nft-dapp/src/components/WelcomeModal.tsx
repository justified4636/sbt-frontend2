interface WelcomeModalProps {
  isDarkMode: boolean;
  showWelcomeModal: boolean;
  setShowWelcomeModal: (show: boolean) => void;
}

export function WelcomeModal({
  isDarkMode,
  showWelcomeModal,
  setShowWelcomeModal,
}: WelcomeModalProps) {
  if (!showWelcomeModal) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-md transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-black/95" : "bg-[#301934]/90"
      } ${showWelcomeModal ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`p-8 rounded-3xl max-w-md mx-4 text-center border shadow-2xl transition-all duration-500 transform ${
          isDarkMode
            ? "bg-gray-800/90 border-[#008080]/50 backdrop-blur-sm"
            : "bg-white/90 border-[#301934]/20 backdrop-blur-sm"
        } ${showWelcomeModal ? "scale-100 opacity-100" : "scale-95 opacity-0"} animate-fadeIn`}
      >
        <div className="mb-6">
          <div
            className={`w-20 h-20 bg-gradient-to-r from-[#008080] to-[#301934] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 hover:shadow-[#008080]/50 hover:rotate-6 animate-pulseGlow`}
          >
            <img
              src="/Daologo.png"
              alt="Alpha DAO logo"
              className="w-18 h-18 animate-spinSlow"
            />
          </div>
          <h2
            className={`text-3xl font-bold mb-3 transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-[#14171a]"
            } bg-gradient-to-r from-[#008080] to-[#301934] bg-clip-text text-transparent animate-gradientText`}
          >
            Welcome to ALPHA DAO
          </h2>
          <p
            className={`text-base leading-relaxed transition-colors duration-300 ${
              isDarkMode ? "text-[#8899a6]" : "text-[#536471]"
            } animate-fadeIn delay-200`}
          >
            Join ALPHA DAO — the premier Web3 education platform empowering the
            next billion users to master blockchain technology. Complete our
            interactive learning journey and earn exclusive NFT certificates
            that showcase your Web3 expertise on the TON network.
          </p>
        </div>
        <button
          onClick={() => setShowWelcomeModal(false)}
          className="w-full relative bg-gradient-to-r from-[#008080] to-[#301934] hover:from-[#301934] hover:to-[#008080] text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-[#008080]/50 overflow-hidden group text-lg animate-buttonGlow"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          <span className="relative">Start Learning</span>
        </button>
      </div>
    </div>
  );
}