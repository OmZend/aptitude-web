import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useTestSessionExit = (isTestActive = true) => {
  const [showDialog, setShowDialog] = useState(false);
  const [targetPath, setTargetPath] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTestActive) return;

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };

    const handleClick = (e) => {
      // Check if click is outside the test container
      const testContainer = document.querySelector('.test-container');
      if (testContainer && !testContainer.contains(e.target)) {
        e.preventDefault();
        setShowDialog(true);
      }

      // Check for external links
      const target = e.target.closest('a');
      if (target && target.href) {
        const currentOrigin = window.location.origin;
        const targetUrl = new URL(target.href);
        
        if (targetUrl.origin !== currentOrigin) {
          e.preventDefault();
          setTargetPath(target.href);
          setShowDialog(true);
        }
      }
    };

    const handleKeyDown = (e) => {
      // Prevent keyboard shortcuts that might exit fullscreen
      if (e.key === 'F11' || (e.ctrlKey && e.key === 'f')) {
        e.preventDefault();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTestActive]);

  const handleConfirm = () => {
    setShowDialog(false);
    if (targetPath) {
      window.location.href = targetPath;
    } else {
      navigate('/');
    }
  };

  const handleCancel = () => {
    setShowDialog(false);
    setTargetPath(null);
  };

  return {
    showDialog,
    handleConfirm,
    handleCancel,
    targetPath
  };
};

export default useTestSessionExit; 