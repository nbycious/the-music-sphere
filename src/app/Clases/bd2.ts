
export class Usuario {
    constructor() {}

    UsuarioId = "";
    Usuario = "";
    Nombre = "";
    Contrasena = "";
    

    setData(data: any) {
        this.UsuarioId = data.UsuarioId;
        this.Usuario = data.Usuario;
        this.Nombre = data.Nombre;
        this.Contrasena = data.Contraseña;
       
    }
}   

export class Disco {
    constructor() {}

    DiscoId = "";
    Artista = "";
    Titulo = "";
    Genero = ""; 
    Precio = 0.0;
    Formato = ""; 
    Descripcion = "";
    ListaCanciones: string[] = new Array(); //para las listas de canciones de cada álbum
    FechaLanzamiento = "";
    ImagenPortada = ""; 

    setData(data: any) {
        this.DiscoId = data.DiscoId;
        this.Artista = data.Artista;
        this.Titulo = data.Titulo;
        this.Genero = data.Genero;
        this.Precio = data.Precio;
        this.Formato = data.Formato;
        this.ListaCanciones = data.ListaCanciones;
        this.FechaLanzamiento = data.FechaLanzamiento;
        this.ImagenPortada = data.ImagenPortada;
    }
}


export class Vinilos {
    constructor(){

    }
    DiscoId = "";
    Artista = "";
    Titulo = "";
    Genero = ""; 
    Precio = 0.0;
    Formato = ""; 
    Descripcion = "";
    ListaCanciones: string[] = new Array(); //para las listas de canciones de cada álbum
    FechaLanzamiento = "";
    ImagenPortada = ""; 
    setData(data: any) {
        this.DiscoId = data.DiscoId;
        this.Artista = data.Artista;
        this.Titulo = data.Titulo;
        this.Genero = data.Genero;
        this.Precio = data.Precio;
        this.Formato = data.Formato;
        this.ListaCanciones = data.ListaCanciones;
        this.FechaLanzamiento = data.FechaLanzamiento;
        this.ImagenPortada = data.ImagenPortada;
    }


}


export class Mercancia {
    constructor() {}

    MercanciaId = "";
    Artista = "";
    Tipo = ""; // Por ejemplo Ropa, posters, etcétera
    Descripcion = "";
    Precio = 0.0;
    Imagen = ""; 

    setData(data: any) {
        this.MercanciaId = data.MercanciaId;
        this.Artista = data.Artista;
        this.Tipo = data.Tipo;
        this.Descripcion = data.Descripcion;
        this.Precio = data.Precio;
        this.Imagen = data.Imagen;
    }
}

export class Compra {
    constructor() {}

    CompraId = "";
    UsuarioId = "";
    FechaCompra = new Date();
    Items = [] as ItemCompra[]; // Lista de productos 
    Total = 0.0;

    setData(data: any) {
        this.CompraId = data.CompraId;
        this.UsuarioId = data.UsuarioId;
        this.FechaCompra = data.FechaCompra;
        this.Items = data.Items;
        this.Total = data.Total;
    }
}

export class ItemCompra {
    constructor() {}

    ItemId = "";
    Tipo = ""; // "Disco" o "Mercancia"
    Cantidad = 0;
    PrecioUnitario = 0.0;

    setData(data: any) {
        this.ItemId = data.ItemId;
        this.Tipo = data.Tipo;
        this.Cantidad = data.Cantidad;
        this.PrecioUnitario = data.PrecioUnitario;
    }
}

export class Reseña {
    constructor() {}

    ReseñaId = "";
    UsuarioId = "";
    ProductoId = ""; // Puede ser un Disco o mercancia
    TipoProducto = ""; // "Disco" o "Mercancia"
    Calificacion = 0;
    Comentario = "";
    FechaReseña = new Date();

    setData(data: any) {
        this.ReseñaId = data.ReseñaId;
        this.UsuarioId = data.UsuarioId;
        this.ProductoId = data.ProductoId;
        this.TipoProducto = data.TipoProducto;
        this.Calificacion = data.Calificacion;
        this.Comentario = data.Comentario;
        this.FechaReseña = data.FechaReseña;
    }
}
