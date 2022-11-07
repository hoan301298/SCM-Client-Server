package fi.vamk.scm.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fi.vamk.scm.server.entities.Truck;
@Repository
public interface TruckRepository extends JpaRepository<Truck, Integer> {

}
