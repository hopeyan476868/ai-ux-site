export function ScrollArea({ children, className = "" }) {
    return (
      <div className={`overflow-auto ${className}`} style={{ scrollbarWidth: 'thin' }}>
        {children}
      </div>
    );
  }
  