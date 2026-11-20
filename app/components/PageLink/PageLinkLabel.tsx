interface IPageLinkLabel {
  value: string
  hideOnMobile?: boolean
  hideOnDesktop?: boolean
}

export default function PageLinkLabel({ 
  value, hideOnMobile = false, hideOnDesktop = false
}: IPageLinkLabel) {
  const styleClasses = `
    text-darkgreen
    ${hideOnMobile && 'hidden'} 
    ${(hideOnMobile && !hideOnDesktop) && 'sm:inline'}
    ${(!hideOnMobile && hideOnDesktop) && 'sm:hidden'}
  `;

  return (
    <span className={styleClasses}>
      {value}
    </span>
  );
}

