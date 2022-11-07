package fi.vamk.scm.server.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fi.vamk.scm.server.entities.Location;

@Repository
public interface LocationRepository extends CrudRepository<Location, Integer> {

}
