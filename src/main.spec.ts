import { integerToWords } from "./main";

describe("Conversão de inteiro para extenso", () => {
  it("deve retornar erro para números negativos", () => {
    expect(() => {
      integerToWords(-1);
    }).toThrow(new RangeError("Number out of range for conversion."));
  });

  describe("números do 1 ao 9 e 11 a 19", () => {
    test("deve retornar Zero para o numero 0", () => {
      expect(integerToWords(0)).toEqual("Zero");
    });

    test("deve retornar Um para o numero 1", () => {
      expect(integerToWords(1)).toEqual("Um");
    });

    test("deve retornar Dois para o numero 2", () => {
      expect(integerToWords(2)).toEqual("Dois");
    });

    test("deve retornar Três para o numero 3", () => {
      expect(integerToWords(3)).toEqual("Três");
    });

    test("deve retornar Quatro para o numero 4", () => {
      expect(integerToWords(4)).toEqual("Quatro");
    });

    test("deve retornar Cinco para o numero 5", () => {
      expect(integerToWords(5)).toEqual("Cinco");
    });

    test("deve retornar Seis para o numero 6", () => {
      expect(integerToWords(6)).toEqual("Seis");
    });

    test("deve retornar Sete para o numero 7", () => {
      expect(integerToWords(7)).toEqual("Sete");
    });

    test("deve retornar Oito para o numero 8", () => {
      expect(integerToWords(8)).toEqual("Oito");
    });

    test("deve retornar Nove para o numero 9", () => {
      expect(integerToWords(9)).toEqual("Nove");
    });

    test("deve retornar Onze para o numero 11", () => {
      expect(integerToWords(11)).toEqual("Onze");
    });

    test("deve retornar Doze para o numero 12", () => {
      expect(integerToWords(12)).toEqual("Doze");
    });

    test("deve retornar Treze para o numero 13", () => {
      expect(integerToWords(13)).toEqual("Treze");
    });

    test("deve retornar Quatorze para o numero 14", () => {
      expect(integerToWords(14)).toEqual("Quatorze");
    });

    test("deve retornar Quinze para o numero 15", () => {
      expect(integerToWords(15)).toEqual("Quinze");
    });

    test("deve retornar Dezesseis para o numero 16", () => {
      expect(integerToWords(16)).toEqual("Dezesseis");
    });

    test("deve retornar Dezessete para o numero 17", () => {
      expect(integerToWords(17)).toEqual("Dezessete");
    });

    test("deve retornar Dezoito para o numero 18", () => {
      expect(integerToWords(18)).toEqual("Dezoito");
    });

    test("deve retornar Dezenove para o numero 19", () => {
      expect(integerToWords(19)).toEqual("Dezenove");
    });
  });

  describe("números com 2 dígitos", () => {
    test("deve retornar Dez para o numero 10", () => {
      expect(integerToWords(10)).toEqual("Dez");
    });

    test("deve retornar Vinte para o numero 20", () => {
      expect(integerToWords(20)).toEqual("Vinte");
    });

    test("deve retornar Trinta para o numero 30", () => {
      expect(integerToWords(30)).toEqual("Trinta");
    });

    test("deve retornar Quarenta para o numero 40", () => {
      expect(integerToWords(40)).toEqual("Quarenta");
    });

    test("deve retornar Cinquenta para o numero 50", () => {
      expect(integerToWords(50)).toEqual("Cinquenta");
    });

    test("deve retornar Sessenta para o numero 60", () => {
      expect(integerToWords(60)).toEqual("Sessenta");
    });

    test("deve retornar Setenta para o numero 70", () => {
      expect(integerToWords(70)).toEqual("Setenta");
    });

    test("deve retornar Oitenta para o numero 80", () => {
      expect(integerToWords(80)).toEqual("Oitenta");
    });

    test("deve retornar Noventa para o numero 90", () => {
      expect(integerToWords(90)).toEqual("Noventa");
    });
  });

  describe("mais números com 2 dígitos", () => {
    test("deve retornar Dezenove para o numero 19", () => {
      expect(integerToWords(19)).toEqual("Dezenove");
    });

    test("deve retornar Vinte e Oito para o numero 28", () => {
      expect(integerToWords(28)).toEqual("Vinte e Oito");
    });

    test("deve retornar Trinta e Sete para o numero 37", () => {
      expect(integerToWords(37)).toEqual("Trinta e Sete");
    });

    test("deve retornar Quarenta e Seis para o numero 46", () => {
      expect(integerToWords(46)).toEqual("Quarenta e Seis");
    });

    test("deve retornar Cinquenta e Cinco para o numero 55", () => {
      expect(integerToWords(55)).toEqual("Cinquenta e Cinco");
    });

    test("deve retornar Sessenta e Quatro para o numero 64", () => {
      expect(integerToWords(64)).toEqual("Sessenta e Quatro");
    });

    test("deve retornar Setenta e Três para o numero 73", () => {
      expect(integerToWords(73)).toEqual("Setenta e Três");
    });

    test("deve retornar Oitenta e Dois para o numero 82", () => {
      expect(integerToWords(82)).toEqual("Oitenta e Dois");
    });

    test("deve retornar Noventa e Um para o numero 91", () => {
      expect(integerToWords(91)).toEqual("Noventa e Um");
    });
  });

  describe("números do 101 a 109 e 111 a 119", () => {
    test("deve retornar Cento e Um para o numero 101", () => {
      expect(integerToWords(101)).toEqual("Cento e Um");
    });

    test("deve retornar Cento e Dois para o numero 102", () => {
      expect(integerToWords(102)).toEqual("Cento e Dois");
    });

    test("deve retornar Cento e Três para o numero 103", () => {
      expect(integerToWords(103)).toEqual("Cento e Três");
    });

    test("deve retornar Cento e Quatro para o numero 104", () => {
      expect(integerToWords(104)).toEqual("Cento e Quatro");
    });

    test("deve retornar Cento e Cinco para o numero 105", () => {
      expect(integerToWords(105)).toEqual("Cento e Cinco");
    });

    test("deve retornar Cento e Seis para o numero 106", () => {
      expect(integerToWords(106)).toEqual("Cento e Seis");
    });

    test("deve retornar Cento e Sete para o numero 107", () => {
      expect(integerToWords(107)).toEqual("Cento e Sete");
    });

    test("deve retornar Cento e Oito para o numero 108", () => {
      expect(integerToWords(108)).toEqual("Cento e Oito");
    });

    test("deve retornar Cento e Nove para o numero 109", () => {
      expect(integerToWords(109)).toEqual("Cento e Nove");
    });

    test("deve retornar Cento e Onze para o numero 111", () => {
      expect(integerToWords(111)).toEqual("Cento e Onze");
    });

    test("deve retornar Cento e Doze para o numero 112", () => {
      expect(integerToWords(112)).toEqual("Cento e Doze");
    });

    test("deve retornar Cento e Treze para o numero 113", () => {
      expect(integerToWords(113)).toEqual("Cento e Treze");
    });

    test("deve retornar Cento e Quatorze para o numero 114", () => {
      expect(integerToWords(114)).toEqual("Cento e Quatorze");
    });

    test("deve retornar Cento e Quinze para o numero 115", () => {
      expect(integerToWords(115)).toEqual("Cento e Quinze");
    });

    test("deve retornar Cento e Dezesseis para o numero 116", () => {
      expect(integerToWords(116)).toEqual("Cento e Dezesseis");
    });

    test("deve retornar Cento e Dezessete para o numero 117", () => {
      expect(integerToWords(117)).toEqual("Cento e Dezessete");
    });

    test("deve retornar Cento e Dezoito para o numero 118", () => {
      expect(integerToWords(118)).toEqual("Cento e Dezoito");
    });

    test("deve retornar Cento e Dezenove para o numero 109", () => {
      expect(integerToWords(119)).toEqual("Cento e Dezenove");
    });
  });

  describe("números com 3 dígitos", () => {
    test("deve retornar Cem para o numero 100", () => {
      expect(integerToWords(100)).toEqual("Cem");
    });

    test("deve retornar Cento e Dez para o numero 110", () => {
      expect(integerToWords(110)).toEqual("Cento e Dez");
    });

    test("deve retornar Cento e Vinte para o numero 120", () => {
      expect(integerToWords(120)).toEqual("Cento e Vinte");
    });

    test("deve retornar Cento e Vinte e Três para o numero 123", () => {
      expect(integerToWords(123)).toEqual("Cento e Vinte e Três");
    });

    test("deve retornar Duzentos e Trinta e Quatro para o numero 234", () => {
      expect(integerToWords(234)).toEqual("Duzentos e Trinta e Quatro");
    });

    test("deve retornar Duzentos e Vinte para o numero 220", () => {
      expect(integerToWords(220)).toEqual("Duzentos e Vinte");
    });

    test("deve retornar Trezentos e Trinta  para o numero 330", () => {
      expect(integerToWords(330)).toEqual("Trezentos e Trinta");
    });

    test("deve retornar Quatrocentos e Cinquenta e Seis e Quatro para o numero 456", () => {
      expect(integerToWords(456)).toEqual("Quatrocentos e Cinquenta e Seis");
    });

    test("deve retornar Seiscentos e Sessenta e Seis para o numero 666", () => {
      expect(integerToWords(666)).toEqual("Seiscentos e Sessenta e Seis");
    });

    test("deve retornar Oitocentos para o numero 800", () => {
      expect(integerToWords(800)).toEqual("Oitocentos");
    });

    test("deve retornar Oitocentos e Cinquenta e Dois de Dois para o numero 852", () => {
      expect(integerToWords(852)).toEqual("Oitocentos e Cinquenta e Dois");
    });

    test("deve retornar Novecentos para o numero 900", () => {
      expect(integerToWords(900)).toEqual("Novecentos");
    });

    test("deve retornar Novecentos e Noventa para o numero 990", () => {
      expect(integerToWords(990)).toEqual("Novecentos e Noventa");
    });

    test("deve retornar Novecentos e Noventa e Nove para o numero 999", () => {
      expect(integerToWords(999)).toEqual("Novecentos e Noventa e Nove");
    });

    test("deve retornar Cento e Oito para o numero 108", () => {
      expect(integerToWords(108)).toEqual("Cento e Oito");
    });

    test("deve retornar Cento e Nove para o numero 109", () => {
      expect(integerToWords(109)).toEqual("Cento e Nove");
    });

    test("deve retornar Cento e Onze para o numero 111", () => {
      expect(integerToWords(111)).toEqual("Cento e Onze");
    });

    test("deve retornar Cento e Doze para o numero 112", () => {
      expect(integerToWords(112)).toEqual("Cento e Doze");
    });

    test("deve retornar Cento e Treze para o numero 113", () => {
      expect(integerToWords(113)).toEqual("Cento e Treze");
    });

    test("deve retornar Cento e Quatorze para o numero 114", () => {
      expect(integerToWords(114)).toEqual("Cento e Quatorze");
    });

    test("deve retornar Cento e Quinze para o numero 115", () => {
      expect(integerToWords(115)).toEqual("Cento e Quinze");
    });

    test("deve retornar Cento e Dezesseis para o numero 116", () => {
      expect(integerToWords(116)).toEqual("Cento e Dezesseis");
    });

    test("deve retornar Cento e Dezessete para o numero 117", () => {
      expect(integerToWords(117)).toEqual("Cento e Dezessete");
    });

    test("deve retornar Cento e Dezoito para o numero 118", () => {
      expect(integerToWords(118)).toEqual("Cento e Dezoito");
    });

    test("deve retornar Cento e Dezenove para o numero 109", () => {
      expect(integerToWords(119)).toEqual("Cento e Dezenove");
    });
  });

  describe("números com 4 dígitos", () => {
    test("deve retornar Mil Cento e Vinte para o numero 1120", () => {
      expect(integerToWords(1120)).toEqual("Mil Cento e Vinte");
    });

    test("deve retornar Mil e Um para o numero 1001", () => {
      expect(integerToWords(1001)).toEqual("Mil e Um");
    });

    test("deve retornar Mil e Dois para o numero 1002", () => {
      expect(integerToWords(1002)).toEqual("Mil e Dois");
    });

    test("deve retornar Mil e Três para o numero 1003", () => {
      expect(integerToWords(1003)).toEqual("Mil e Três");
    });

    test("deve retornar Mil e Quatro para o numero 1004", () => {
      expect(integerToWords(1004)).toEqual("Mil e Quatro");
    });

    test("deve retornar Mil e Nove para o numero 1009", () => {
      expect(integerToWords(1009)).toEqual("Mil e Nove");
    });

    test("deve retornar Mil e Dez para o numero 1010", () => {
      expect(integerToWords(1010)).toEqual("Mil e Dez");
    });

    test("deve retornar Mil e Quinze para o numero 1015", () => {
      expect(integerToWords(1015)).toEqual("Mil e Quinze");
    });

    test("deve retornar Mil e Dezenove para o numero 1019", () => {
      expect(integerToWords(1019)).toEqual("Mil e Dezenove");
    });

    test("deve retornar Mil e Noventa e Nove para o numero 1099", () => {
      expect(integerToWords(1099)).toEqual("Mil e Noventa e Nove");
    });

    test("deve retornar Cinco Mil Duzentos para o numero 5200", () => {
      expect(integerToWords(5200)).toEqual("Cinco Mil Duzentos");
    });

    test("deve retornar Nove Mil Novecentos e Noventa e Nove para o numero 9999", () => {
      expect(integerToWords(9999)).toEqual("Nove Mil Novecentos e Noventa e Nove");
    });
  });
  describe("números com 5 dígitos", () => {
    test("deve retornar Dez Mil e Dez para o numero 10010", () => {
      expect(integerToWords(10010)).toEqual("Dez Mil e Dez");
    });

    test("deve retornar Vinte Mil e Vinte e Quatro para o numero 20024", () => {
      expect(integerToWords(20024)).toEqual("Vinte Mil e Vinte e Quatro");
    });
  });

  describe("números com 6 dígitos", () => {
    test("deve retornar Cento e Dez Mil Cento e Noventa e Cinco para o numero 110195", () => {
      expect(integerToWords(110195)).toEqual("Cento e Dez Mil Cento e Noventa e Cinco");
    });

    test("deve retornar Duzentos e Quarenta e Cinco Mil Novecentos e Noventa e Oito para o numero 245998", () => {
      expect(integerToWords(245998)).toEqual("Duzentos e Quarenta e Cinco Mil Novecentos e Noventa e Oito");
    });

    test("deve retornar Trezentos e Quarenta e Dois Mil para o numero 342000", () => {
      expect(integerToWords(342000)).toEqual("Trezentos e Quarenta e Dois Mil");
    });

    test("deve retornar Seiscentos e Cinquenta Mil e Um para o numero 650001", () => {
      expect(integerToWords(650001)).toEqual("Seiscentos e Cinquenta Mil e Um");
    });

    test("deve retornar Seiscentos e Oitenta e Cinco Mil Duzentos 685200", () => {
      expect(integerToWords(685200)).toEqual("Seiscentos e Oitenta e Cinco Mil Duzentos");
    });

    test("deve retornar Quatrocentos e Vinte Mil Duzentos e Cinquenta Oito para o numero 420258", () => {
      expect(integerToWords(420258)).toEqual("Quatrocentos e Vinte Mil Duzentos e Cinquenta e Oito");
    });
  });

  describe("números com 7 8 e 9 dígitos - Milhão", () => {
    test("deve retornar Um Milhão Quatrocentos e Cinquenta e Oito Mil Novecentos e Oitenta e Cinco para o numero 1458985", () => {
      expect(integerToWords(1458985)).toEqual(
        "Um Milhão Quatrocentos e Cinquenta e Oito Mil Novecentos e Oitenta e Cinco"
      );
    });

    test("deve retornar Vinte Milhões Seiscentos e Oitenta e Cinco Mil Duzentos para o numero 20685200", () => {
      expect(integerToWords(20685200)).toEqual("Vinte Milhões Seiscentos e Oitenta e Cinco Mil Duzentos");
    });

    test("deve retornar Cento e Vinte Milhões Seiscentos e Sessenta e Seis Mil Novecentos e Noventa e Nove para o numero 120666999", () => {
      expect(integerToWords(120666999)).toEqual(
        "Cento e Vinte Milhões Seiscentos e Sessenta e Seis Mil Novecentos e Noventa e Nove"
      );
    });
  });

  describe("números com 10 11 e 12 dígitos - Bilhão", () => {
    test("deve retornar Um Bilhão Quatrocentos e Cinquenta e Oito Milhões Novecentos e Oitenta e Cinco Mil para o numero 1458985000", () => {
      expect(integerToWords(1458985000)).toEqual(
        "Um Bilhão Quatrocentos e Cinquenta e Oito Milhões Novecentos e Oitenta e Cinco Mil"
      );
    });

    test("deve retornar Vinte Bilhões Seiscentos e Oitenta e Cinco Milhões Duzentos Mil Duzentos para o numero 20685200000", () => {
      expect(integerToWords(20685200000)).toEqual("Vinte Bilhões Seiscentos e Oitenta e Cinco Milhões Duzentos Mil");
    });

    test("deve retornar Cento e Vinte Bilhões Seiscentos e Sessenta e Seis Milhões Novecentos e Noventa e Nove Mil para o numero 120666999000", () => {
      expect(integerToWords(120666999000)).toEqual(
        "Cento e Vinte Bilhões Seiscentos e Sessenta e Seis Milhões Novecentos e Noventa e Nove Mil"
      );
    });
  });
});
