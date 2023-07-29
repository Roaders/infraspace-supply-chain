import { Material } from '../contracts';

export function mapMaterialToIcon(material: Material): string {
    switch (material) {
        case 'citizen':
            return 'citizenMovingOut';
        case 'nanotubes':
            return 'nanoTubes';
        default:
            return material;
    }
}
