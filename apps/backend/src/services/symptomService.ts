import { prisma } from '../index';

export class SymptomService {
  static async create(userId: string, details: string) {
    return prisma.symptom.create({ data: { userId, details } });
  }

  static async getAll(userId: string) {
    return prisma.symptom.findMany({ where: { userId } });
  }
}