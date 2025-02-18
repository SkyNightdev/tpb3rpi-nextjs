export function Table({ children, className }: { children: React.ReactNode; className?: string }) {
    return <table className={`w-full border-collapse border border-gray-300 ${className || ""}`}>{children}</table>;
  }
  
  export function TableHeader({ children, className }: { children: React.ReactNode; className?: string }) {
    return <thead className={`bg-gray-100 ${className || ""}`}>{children}</thead>;
  }
  
  export function TableBody({ children, className }: { children: React.ReactNode; className?: string }) {
    return <tbody className={className}>{children}</tbody>;
  }
  
  export function TableRow({ children, className }: { children: React.ReactNode; className?: string }) {
    return <tr className={`border-b border-gray-300 ${className || ""}`}>{children}</tr>;
  }
  
  export function TableHead({ children, className }: { children: React.ReactNode; className?: string }) {
    return <th className={`p-2 border border-gray-300 text-left ${className || ""}`}>{children}</th>;
  }
  
  export function TableCell({ children, className }: { children: React.ReactNode; className?: string }) {
    return <td className={`p-2 border border-gray-300 ${className || ""}`}>{children}</td>;
  }
  