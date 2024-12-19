export interface ResponseCrecos {
    lista: ListaDto[];
    codigoStatus: number;
    mensaje: string;
  }
  
  export interface ListaDto {
    SistemaOrigen: string;
    CodigoCliente: number;
    CodigoEmpresa: string;
    Empresa: string;
    CodigoUnidadNegocio: string;
    UnidadNegocio: string;
    OrigenDeuda: string;
    FechaCorte: string; 
    FechaVencimiento: string; 
    ValorMinimoVencido: number;
    ValorMinimoCorriente: number;
    ValorMinimo: number;
    ValorProximoCorte: number;
    ValorPorVencer: number;
    ValorPagarConDescuento: number;
    ValorPropuesto: number;
    SaldoOperaciones: SaldoOperacionDto[];
  }
  
  export interface SaldoOperacionDto {
    CodigoOperacion: number;
    CodigoCliente: number;
    CodigoEmpresa: string;
    Empresa: string;
    CodigoUnidadNegocio: string;
    UnidadNegocio: string;
    CodigoTipoCartera: string;
    TipoCartera: string;
    CodigoTipoOperacion: string;
    TipoOperacion: string;
    CodigoGrupoTipoCredito: string;
    NumeroFactura: string;
    FechaFactura: string; // Puede ser `Date`
    FechaCorte: string; // Puede ser `Date`
    FechaVencimiento: string; // Puede ser `Date`
    CortesVencidos: number;
    CortesPorVencer: number;
    CortesPendientes: number;
    ValorMinimoVencido: number;
    ValorMinimoCorriente: number;
    ValorMinimo: number;
    ValorProximoCorte: number;
    ValorPorVencer: number;
    ValorPagarConDescuento: number;
    ValorPropuesto: number;
    OrigenDeuda: string;
  }
  