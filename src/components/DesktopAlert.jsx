import { Alert, TitleBar } from '@react95/core';

export const DesktopAlert = ({
  title = 'Alert',
  type = 'info',
  message = '',
  position = { x: 200, y: 200 },
  buttons = [],
  onHelp,
  onClose = () => {},
}) => {
  const titleBarOptions = [];

  if (onHelp !== null) {
    titleBarOptions.push(
      <TitleBar.Help
        key="help"
        onClick={onHelp ?? undefined}
      />
    );
  }

  titleBarOptions.push(
    <TitleBar.Close key="close" onClick={onClose} />
  );

  return (
    <Alert
      title={title}
      type={type}
      message={message}
      dragOptions={{ defaultPosition: position,}}
      titleBarOptions={titleBarOptions}
      buttons={buttons.map(({ label, onClick }) => ({
        value: label,
        onClick,
      }))}
    />
  );
};
