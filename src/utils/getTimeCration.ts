export const getTimeElapsedString = (createdAt:string) => {
    const now:any = new Date();
    const createdDate:any = new Date(createdAt);
    const diffInMilliseconds = now - createdDate;
  
    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (seconds < 60) {
      return "Ahora";
    } else if (minutes < 60) {
      return `Hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
    } else if (hours < 24) {
      return `Hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    } else if (days < 30) {
      return `Hace ${days} ${days === 1 ? 'día' : 'días'}`;
    } else if (months < 12) {
      return `Hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
    } else {
      return `Hace ${years} ${years === 1 ? 'año' : 'años'}`;
    }
  }