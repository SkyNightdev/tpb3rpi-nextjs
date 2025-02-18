export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`bg-white p-4 shadow-md rounded-lg ${className || ""}`}>{children}</div>;
  }
  
  export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`font-bold text-lg ${className || ""}`}>{children}</div>;
  }
  
  export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`mt-2 ${className || ""}`}>{children}</div>;
  }
  
  export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
    return <h2 className={`text-xl font-semibold ${className || ""}`}>{children}</h2>;
  }
  